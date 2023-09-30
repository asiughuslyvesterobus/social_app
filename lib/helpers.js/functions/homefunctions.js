const Post = require("../../../models/post");

function createModifiedHomePostObject(posts) {
  const modifiedPosts = posts.map((post) => {
    const selectedProperties = new Post(post).toJSON();
    selectedProperties.likes = selectedProperties.likes.length;
    selectedProperties.comments = selectedProperties.comments.length;
    selectedProperties.author = selectedProperties.author.profile;
    delete selectedProperties.likes;
    delete selectedProperties.comments;
    delete selectedProperties._v;
    delete selectedProperties._id;
    return selectedProperties;
  });
  return modifiedPosts;
}

module.exports.createModifiedHomePostObject = createModifiedHomePostObject;
