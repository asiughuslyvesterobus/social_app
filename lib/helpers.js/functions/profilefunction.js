const User = require("../../../models/user");
const Post = require("../../../models/post");
const { BadRequestError } = require("../../error");

function handleLikesMessage(likesUsernames) {
  let likesMessage;
  if (likesUsernames.length === 1) {
    likesMessage = `${likesUsernames[0]} liked your post`;
  }
  if (likesUsernames.length === 2) {
    likesMessage = `${likesUsernames[0]} and ${likesUsernames[1]} liked your post`;
  }
  if (likesUsernames.length === 3) {
    likesMessage = `${likesUsernames[0]}, ${likesUsernames[1]} and ${likesUsernames} liked ypur post`;
  }
  if (likesUsernames.length > 3) {
    likesMessage = `${likesUsernames[0]},${likesUsernames[1]}and${
      likesUsernames.length - 2
    } others liked your post`;
  }
  return likesMessage;
}

async function updateChangedProfileProperties(user, data) {
  if (data.userName !== undefined) {
    const usernameExists = await User.findOne({
      "profile.userName": data.userName
    });
    if (usernameExists) {
      throw new BadRequestError("Username taken");
    }
    user.profile.userName = data.userName;
  }
  //   check if bio is given
  if (data.bio !== undefined) {
    user.profile.bio = data.bio;
  }
  //   check if profiletype is given
  if (data.profileType !== undefined) {
    user.profile.profileType = data.profileType;
  }
  return user;
}
function createModifiedMyPostObject(posts, likesMessage, postsComment) {
  let modifiedPost = posts.map((post) => {
    const selectedProperties = new Post(post).toJSON();
    selectedProperties.likes = likesMessage;
    selectedProperties.comments = postsComment;
    delete selectedProperties._id;
    delete selectedProperties._v;
    delete selectedProperties.author;
    return selectedProperties;
  });
  return modifiedPost;
}
function createModifiedViewPostObject(posts) {
  let modifiedPost = posts.map((post) => {
    const selectedProperties = new Post(post).toJSON();
    selectedProperties.likes = selectedProperties.likes.length;
    selectedProperties.comments = selectedProperties.comments.length;
    delete selectedProperties.author;
    delete selectedProperties.comments;
    delete selectedProperties.likes;
    delete selectedProperties._v;
    return selectedProperties;
  });
  return modifiedPost;
}

async function Accepting_or_DecliningFollowingRequest(action, data) {
  if (action === "accept") {
    // add requester to user followers
    await User.findOneAndUpdate(
      { _id: data.userId },
      { $push: { "profile.followers": data.requesterId } }
    );
    // remove requester from user followerequests
    await User.findOneAndUpdate(
      { _id: data.requesterId },
      { $pull: { followRequest: data.requesterId } }
    );
    // add user to requester following
    await User.findOneAndUpdate(
      { _id: data.requesterId },
      { $push: { "profile.following": data.user } }
    );
    return {
      success: true,
      message: `You have accepted ${data.userId}`
    };
  } else {
    // remove requestee from user follow request
    await User.findOneAndUpdate(
      { _id: data.userId },
      { $pull: { followRequest: data.requesterId } }
    );
    return {
      success: true,
      message: `You have declined ${data.username}'s follow request`
    };
  }
}

async function followOrUnfollow(user, data) {
  const followeeeUsername = user.profile.userName;

  const alreadyFollowing = await User.findOne({
    "profile.followers": data.userId
  });
  if (alreadyFollowing) {
    // remove from user following
    await User.findOneAndUpdate(
      { _id: data.followeeId },
      { $pull: { "profile.followers": data.userId } }
    );
    // unfollow
    await User.findOneAndUpdate(
      { _id: data.userId },
      { $pull: { "profile.following": data.followeeId } }
    );
    return { message: `You Unfollowed ${followeeeUsername}` };
  }
  //   send followeRequest for private Profiles
  if (user.profile.profileType == "private") {
    // check if user already has follow request
    const hasFollowRequest = await User.findOne({ followRequest: data.userId });
    if (hasFollowRequest) {
      // retract follow request
      await User.findOneAndUpdate(
        { _id: data.followeeId },
        { $pull: { followRequest: data.userId } }
      );
      return { message: `You have cancelled your follow request` };
    }
    await User.findOneAndUpdate(
      { _id: data.followeeId },
      { $push: { followRequest: data.userId } }
    );
    return { message: `You have sent${followeeeUsername} a follow request` };
  }
  //   add to user followers
  await User.findOneAndUpdate(
    { _id: data.followeeId },
    { $push: { "profile.following": data.followeeId } }
  );
  return {
    success: true,
    message: `You are now following ${followeeeUsername}`
  };
}

module.exports.handleLikesMessage = handleLikesMessage;
module.exports.updateChangedProfileProperties = updateChangedProfileProperties;
module.exports.createModifiedMyPostObject = createModifiedMyPostObject;
module.exports.createModifiedViewPostObject = createModifiedViewPostObject;
module.exports.Accepting_or_DecliningFollowingRequest =
  Accepting_or_DecliningFollowingRequest;
module.exports.followOrUnfollow = followOrUnfollow;
