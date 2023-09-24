const { BadRequestError, Unauthorized } = require("../lib/error");
const {
  validatePost,
  validateComment
} = require("../lib/validation/postvalidation");
const User = require("../models/user");
const Post = require("../models/post");

//@Method:GET /profile/followers
//@Desc: get followers
//@Access: private

const post = async (req, res, next) => {
  // validate post
  const error = await validatePost(req.body);
  if (error) {
    throw new BadRequestError(error);
  }

  // implement post for private profiles
  const { title, content } = req.body;
  const userId = req.user._id;

  const post = new Post({
    author: userId,
    title,
    content
  });
  await post.save();
  res.status(200).json({ success: true, message: "post made successfully" });
};

// Method:Put /profile/:postId/like
//@Desc: like a post
//@Access: public

const likePost = async (req, res, next) => {
  const PostId = req.params.postId;
  const userId = req.user._id;

  //   find post
  const post = await Post.findById({ _id: PostId });
  if (post.author.toString() == userId.toString()) {
    throw new BadRequestError("you cannot like your own post");
  }

  // find author
  const author = await User.findById({ _id: post.author });
  if (!post) {
    throw new BadRequestError("post not found");
  }

  //   check if user has already liked post
  const hasLikedPost = await Post.findOne({ _id: postId, likes: userId });

  if (hasLikedPost) {
    await Post.findOneAndUpdate({ _id: postId }, { $pull: { likes: userId } });
    res.status(200).json({
      success: true,
      message: `you unliked ${author.profile.userName} 's post `
    });
    return;
  }
  //   add user to like arrray
  await Post.findOneAndUpdate({ _id: postId }, { $push: { likes: userId } });
  res.status(200).json({
    success: true,
    message: `you liked ${author.profile.userName}'s post`
  });
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
  const post = await Post.findById({ _id: postId });
  if (!post) {
    throw new BadRequestError("post cannot be found");
  }

  //   create comment object
  const comment = {
    user: userId,
    message
  };
  //   add comment object to comments array
  post.comments.push(comment);
  await post.save();
  res.status(200).json({ message: "comment successful" });
};

const deletePost = async (req, res, next) => {
  const userId = req.user._id;
  const { postId } = req.params;
  // check if post belongs to user
  const post = await Post.find({ _id: postId, author: userId });
  if (!post) {
    throw new Unauthorized("you cannot delete a post another user post");
  }
  //   delete post
  await Post.findOneAndDelete({ _id: postId });

  res.status(200).json({ message: "post deleted " });
};

module.exports.post = post;
module.exports.likePost = likePost;
module.exports.commentPost = commentPost;
module.exports.deletePost = deletePost;
