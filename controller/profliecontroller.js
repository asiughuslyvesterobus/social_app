const {
  BadRequestError,
  Unauthorized,
  NotFoundError,
} = require("../lib/error");
const {
  validateProfileEdit,
  validateRequestAction,
} = require("../lib/validation/userValidation");
const {
  validatePost,
  validateComment,
} = require("../lib/validation/postvalidation");
const User = require("../models/user");
const post = require("../models/post");

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
    "profile.followers": userId,
  });
  if (alreadyFollowing) {
    // remove from user following
    await User.findOneAndUpdate(
      {
        _id: user._id,
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
    msg: `you are now following ${followerUsername}`,
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
      model: "User",
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
      model: "User",
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

//@Method:GET /profile/followers
//@Desc: get followers
//@Access: private

const Post = async (req, res, next) => {
  // validate post
  const error = await validatePost(req.body);
  if (error) {
    throw new BadRequestError(error);
  }

  // implement post for private profiles
  const { title, content } = req.body;
  const userId = req.user._id;

  const post = new post({
    author: userId,
    title,
    content,
  });
  await post.save();
  res.status(200).json({ success: true, message: "post made successfully" });
};

//@Method:POST /profile/find
//@Desc: find and view a profile
//@Access: public
const viewProfile = async (req, res, next) => {
  const userId = req.user._id;
  const { userName } = req.body;

  // find user posts
  let posts = await post.find({ author: user._id });
  if (!posts) {
    posts = `${userName} has no post`;
  }

  // create profile object
  const profile = {
    Username: user.profile.userName,
    accountType: user.profile.profileType,
    followers: user.profile.followers.length,
    following: user.profile.following.length,
  };

  // if the profile is private
  if (user.profile.profileType === "private") {
    // check if the user follows the private profile
    const isaFollower = user.profile.followers.includes(usedId);
    if (!isaFollower) {
      res.status(200).json({
        profile,
        message: `only followers of ${userName} can view there post`,
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

//@Method:POST /profile/:postId/comment
//@Desc: comment on a post
//@Access: public

const commentPost = async (req, res, next) => {
  // validate comment
  const error = await validateComment(req.body);
  if (error) {
    throw new BadRequestError(error);
  }
  const postId = req.params.postId;
  const { message } = req.body;
  const userId = req.user._id;

  //   find post
  const post = await this.post.findById({ _id: postId });
  if (!post) {
    throw new BadRequestError("post cannot be found");
  }

  //   create comment object
  const comment = {
    user: userId,
    message,
  };
  //   add comment object to comments array
  post.comments.push(comment);
  await post.save();
  res.status(200).json({ message: "comment successful" });
};
// Method:POST /profile/:postId/like
//@Desc: like a post
//@Access: public

const likePost = async (req, res, next) => {
  const postId = req.params.postId;
  const userId = req.user._id;

  //   find post
  const post = await this.post.findById({ _id: postId });
  if (post.author.toString() == userId.toString()) {
    throw new BadRequestError("you cannot like your own post");
  }

  // find author
  const author = await User.findById({ _id: post.author });
  if (!post) {
    throw new BadRequestError("post not found");
  }

  //   check if user has already liked post
  const hasLikedPost = await post.findOne({ _id: postId, likes: userId });
  if (hasLikedPost) {
    await post.findOneAndUpdate({ _id: postId }, { $pull: { likes: userId } });
    res.status(200).json({
      success: true,
      message: `you unliked ${author.profile.userName} 's post `,
    });
    return;
  }
  //   add user to like arrray
  await post.findOneAndUpdate({ _id: postId }, { $push: { likes: userId } });
  res.status(200).json({
    success: true,
    message: `you liked ${author.profile.userName}'s post`,
  });
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
      path: "followRequest",
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
      message: `you have denied ${username}'s follow request`,
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

module.exports.followProfile = followProfile;
module.exports.viewFollowing = viewFollowing;
module.exports.Post = Post;
module.exports.commentPost = commentPost;
module.exports.likePost = likePost;
module.exports.viewProfile = viewProfile;
module.exports.viewFollowRequest = viewFollowRequest;
module.exports.viewfollowers = viewfollowers;
module.exports.followRequestAction = followRequestAction;
module.exports.editProfile = editProfile;
