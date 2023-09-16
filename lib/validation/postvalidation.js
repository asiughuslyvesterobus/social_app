const yup = require("yup");
const { schema } = require("../../models/post");

async function validatePost(data) {
  const schema = yup.object().shape({
    title: yup.string().label("title"),
    content: yup.string().required("post cannot be empty").label("post"),
  });

  try {
    const validationData = await schema.validate(data);
  } catch (error) {
    return error?.error[0];
  }
}

async function validateComment(data) {
  const schema = yup.object().shape({
    message: yup.string
      .max(250)
      .min(2)
      .required("comment cannot be empty")
      .label("comment"),
  });
  try {
    const validateData = await schema.validate(data);
  } catch (error) {
    return error?.error[0];
  }
}

module.exports.validateComment = validateComment;
module.exports.validatePost = validatePost;
