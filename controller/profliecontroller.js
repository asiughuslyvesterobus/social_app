const { BadRequestError } = require("../lib/error");
const {
  validateProfileEdit,
  validateRequestAction
} = require("../lib/validation/userValidation");
const User = require("../models/user");

//@Method:Get /profile/
//@Desc: view my profile
//@Access: private

const myProfile = async (req, res, next) => {
  const userId = req.user._id;
  const user = await User.findById({ _id: user });
  if (!user) {
    throw new BadRequestError("login to view your profile");
  }

  // create object contaning user propreties
  const userProfile = {
    username: user.profile.userName,
    bio: user.profile.bio,
    followers: user.profile.followers.length,
    following: user.profile.following.length
  };

  // find users posts
  const posts = await post.find({ author: userId });
  if (post.length === 0) {
    res.status(200).json({ userProfile, message: "you have no post" });
    return;
  }
  const postsLikes = await post
    .find({ author: userId })
    .populate("likes", "profile.userName")
    .select("profile.userName");

  const postsComment = posts
    .map((post) =>
      post.comments.map((comment) => ({
        userName: comment.userName,
        message: comment.message
      }))
    )
    .flat();
  // map out username of the  posts likes
  const likesUserNames = postsLikes
    .map((postLike) => postLike.likes.map((like) => like.profile.userName))
    .flat();

  // handle the likes message
  let likesmessage;
  if (likesUsernames.length === 1) {
    likesmessage = `${likesUsernames[0]} like your post`;
  }
  if (likesUsernames.length === 2) {
    likesmessage = `${likesUsernames[0]} and ${likesUsernames[1]} liked your post`;
  }
  if (likesUsernames.length === 3) {
    likesmessage = `${likesUsernames[0]} and ${likesUserNames[1]}and ${likesUsernames[2]} liked your post`;
  }
  if (likesUsernames.length > 3) {
    likesmessage = `${likesUsernames[0]},${likesUsernames[1]} and ${
      likesUsernames.length - 2
    } others liked your post`;
  }
  // create new post object contaning selected properties
  const Your_Posts = posts.map((post) => {
    const selectedProperties = new Post(post).toJSON();
    selectedProperties.likes = likesMessage;
    selectedProperties.comments = postsComment;
    delete selectedProperties._id;
    delete selectedProperties.__v;
    delete selectedProperties.author;
    return selectedProperties;
  });
  res.status(200).json({ userProfile, your_post });
};
//@Method:POST /profile/follow
//@Desc: follow profile
//@Access : Private
const followProfile = async (req, res, next) => {
  const { userName } = req.body;
  const userId = req.User_id;

  const user = await User.findOne({ "profile.userName": userName });
  if (!user) {
    throw new BadRequestError("User does not exist");
  }

  if (userId.toString() === user._id.toString()) {
    throw new BadRequestError("you cannot follow yuorself");
  }

  //    userName
  const followerUsername = User.profile.userName;

  // check if user is already following
  const alreadyFollowing = await User.findOne({
    "profile.followers": userId
  });
  if (alreadyFollowing) {
    // remove from user following
    await User.findOneAndUpdate(
      {
        _id: user._id
      },
      { $pull: { "profile.followers": userId } }
    );
    // unfollow
    await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { "profile.following": user._id } }
    );
    res.status(200).json({ message: `you unfolowed ${followerUsername}` });
    return;
  }
  //     add logic for private accounts
  // add to user followers
  await User.findOneAndUpdate(
    { _id: user._id },
    { $push: { "profile.following": user._id } }
  );
  //   add to user following
  await User.findOneAndUpdate(
    { _id: userId },
    { $push: { "profile.following": user_id } }
  );
  res.status(200).json({
    succes: true,
    msg: `you are now following ${followerUsername}`
  });
};
//@Method:GET /profile/following
//@Desc: get following
//@Access: private
const viewFollowing = async (req, res, next) => {
  const userId = req.user._id;
  //   find user and populate followers field
  const user = await User.findById({ _id: userId })
    .populate({
      path: "profile.following",
      model: "User"
    })
    .select("profile.following");

  // get the usernames of the following
  const names_following = user.profile.following.map(
    (user) => user.profile.username
  );
  if (names_following.length == 0) {
    res.json("you are not following anyone");
    return;
  }
  res.json({ message: `you are following ${names_following}` });
};
//@Method:GET /profile/followers
//@Desc: get followers
//@Access: private

const viewfollowers = async (req, res, next) => {
  const userId = req.user._id;

  //   find user and populate followers field
  const user = await User.findById({ _id: userId })
    .populate({
      path: "profile.followers",
      model: "User"
    })
    .select("profile.followers");

  // get username of followers
  const names_followers = user.profile.followers.map(
    (user) => user.profile.userName
  );
  if (names_followers.length == 0) {
    res.json("you have no followers");
    return;
  }
  res.json(names_followers);
};

//@Method:POST /profile/find
//@Desc: find and view a profile
//@Access: public
const findProfile = async (req, res, next) => {
  const userId = req.user._id;
  const { userName } = req.body;

  // find user
  const user = await User.findOne({ "profile.userName": userName });
  if (!user) {
    throw new BadRequestError("invalid userName");
  }

  // find user posts
  let posts = await post
    .find({ author: user._id })
    .populate("comments", "message");
  if (!posts) {
    posts = `${userName} has no post`;
  }

  // create profile object
  const profile = {
    Username: user.profile.userName,
    accountType: user.profile.profileType,
    followers: user.profile.followers.length,
    following: user.profile.following.length
  };

  // if the profile is private
  if (user.profile.profileType === "private") {
    // check if the user follows the private profile
    const isaFollower = user.profile.followers.includes(usedId);
    if (!isaFollower) {
      res.status(200).json({
        profile,
        message: `only followers of ${userName} can view there post`
      });
      return;
    }
  }
  // select required post properties
  const userPosts = posts.map((post) => {
    const selectedProperties = new post(post).toJSON();
    selectedProperties.likes = selectedProperties.likes.length;
    selectedProperties.comments = selectedProperties.comments.length;
    delete selectedProperties.author;
    delete selectedProperties.comments;
    delete selectedProperties.likes;
    delete selectedProperties._v;
    return selectedProperties;
  });
  res.status(200).json({ profile, userPosts });
};

//@Method:GET /profile/follow-requests
//@Desc: manage follow requests
//@Access: private

const viewFollowRequest = async (req, res, next) => {
  const userId = req.user._id;

  // check profile type
  if (req.user.profile.profileType !== "private") {
    throw new BadRequestError("Only private account have follow request");
  }

  // find user and populate follow request field
  const user = await User.findById({ _id: userId })
    .populate({
      model: "User",
      path: "followRequest"
    })
    .select("followRequest");

  // username of followerRequests
  const userFollowerRequests = user.followerRequest.map(
    (followerRequest) => followerRequest.profile.userName
  );
  if (user.followRequest.length == 0) {
    res.json({ message: `you have no friend request` });
  }
  res
    .status(200)
    .json({ message: `you have follow request from ${userFollowerRequests}` });
};
//@Method:POst /profile/follow-requests/action
//@Desc: manage follow requests
//@Access: private

const followRequestAction = async (req, res, next) => {
  // validate request body
  const error = await validateRequestAction(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const userId = req.user._id;
  const { action, username } = req.body;

  // find requester by username
  const user = await User.findOne({ "profile.userName": username });
  if (!user) {
    throw new BadRequestError("Username not found ");
  }
  if (action === "accept") {
    // add requester to user followers
    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { "profile.followers": user.user_id } }
    );
    // remove requester from user followerRequests
    await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { followRequest: user._id } }
    );
    // add user to request following
    await User.findOneAndUpdate(
      { _id: user._id },
      { $push: { "profile.following": userId } }
    );
    res
      .status(200)
      .json({ msg: `you have accepted ${username}'s follow request` });
  } else {
    // remove requestee from user follow request
    await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { followRequest: user._id } }
    );
    res.status(200).json({
      success: true,
      message: `you have denied ${username}'s follow request`
    });
  }
};
//@Method:PUT /profile/edit
//@Desc: edit profile
//@Access: private

const editProfile = async (req, res, next) => {
  const userId = req.user._id;
  const error = await validateProfileEdit(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const user = await User.findById({ _id: userId });

  let { userName, bio, profileType } = req.body;

  // check if username is provided
  if (userName !== undefined) {
    user.profile.userName = userName;
    await user.save();
  }
  // check if profiletype is given
  if (profileType !== undefined) {
    user.profile.profileType = profileType;
    await user.save();
  }
  res.json({ message: "account updated succesfully" });
};

module.exports.myProfile = myProfile;
module.exports.followProfile = followProfile;
module.exports.viewFollowing = viewFollowing;
module.exports.findProfile = findProfile;
module.exports.viewFollowRequest = viewFollowRequest;
module.exports.viewfollowers = viewfollowers;
module.exports.followRequestAction = followRequestAction;
module.exports.editProfile = editProfile;
