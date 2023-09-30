const {
  createModifiedHomePostObject
} = require("../lib/helpers.js/functions/homefunctions");
const User = require("../models/user");
const Post = require("../models/post");

//@Method: GET user/home
//@Desc: Homepage
//@Acces: Public

const homePage = async (req, res) => {
  const userId = req.user._id;

  // find user and populate user following field
  const user = await User.findById({ _id: userId })
    .populate("profile.following")
    .select("profile.following");

  // map out the id of user following
  const followingId = user.profile.following.map((user) => user._id);

  // find posts made by user following
  const posts = await Post.find({ author: { $in: followingId } })
    .populate("author", "profile.userName")
    .sort({ dateCreated: -1 });

  // create a modified post object with selected properties
  const homePosts = createModifiedHomePostObject(posts);

  res.json({ msg: "WELCOME TO THE SOCIAL_ APP", homePosts });
};

//@Method: GET user/home
//@Desc: Homepage
//@Acces: Public

const viewPostByTopic = async (req, res, next) => {
  const userId = req.user._id;

  // find user and populate following
  const user = await User.findById({ _id: userId })
    .populate("profile.following")
    .select("profile.following");

  // map out the ids of the following field
  const followingId = user.profile.following.map((user) => user._id);
  const { title } = req.body;

  // find post made by the user following by topic
  const posts = await Post.find({
    author: { $in: followingId },
    title: title
  })
    .populate("author", "profile.userName")
    .sort({ dateCreated: -1 });

  if (posts.length == 0) {
    res.status(404).json({ message: "there are no post under this topic" });
    return;
  }
  // create new modified post object with selected properties
  const homePosts = createModifiedHomePostObject(posts);
  res.status(200).json(homePosts);
};

module.exports.homePage = homePage;
module.exports.viewPostByTopic = viewPostByTopic;
