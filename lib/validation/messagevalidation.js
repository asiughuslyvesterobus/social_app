const yup = require("yup");

async function validateGroup(data) {
  const schema = yup.object().shape({
    userNames: yup.array().of(yup.string().required("field cannot be empty"))
  });
  try {
    const validateData = await schema.validate(data);
    return null;
  } catch (error) {
    return error?.error[0];
  }
}

async function validateMessage(data) {
  const schema = yup.object().shape({
    textMessage: yup.string().require("cannot send empty message")
  });
  try {
    const validateData = await schema.validate(data);
    return null;
  } catch (error) {
    return error?.error[0];
  }
}
module.exports.validateGroup = validateGroup;
module.exports.validateMessage = validateMessage;
