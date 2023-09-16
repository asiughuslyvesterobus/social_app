//@Method: GET user/home
//@Desc: Homepage
//@Acces: Public
const post = require("../models/post");

const Home = async (req, res) => {
  const posts = await post
    .find()
    .populate("author", "profile.userName")
    .sort({ dateCreated: -1 });

  const homePosts = posts.map((post) => {
    const selectedProperties = new post(post).toJSON();
    selectedProperties.likes = selectedProperties.likes.length;
    selectedProperties.comments = selectedProperties.comments.length;
    selectedProperties.author = selectedProperties.author.profile;
    delete selectedProperties.likes;
    delete selectedProperties.comments;
    delete selectedProperties.__v;
    delete selectedProperties._id;
    return selectedProperties;
  });
  res.json({ msg: "WELCOME TO THE SOCIAL_ APP", homePosts });
};

module.exports = Home;
