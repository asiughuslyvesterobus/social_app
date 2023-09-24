const yup = require("yup");

const profileSchema = yup.object().shape({
  userName: yup
    .string()
    .min(2)
    .max(20)
    .required("username is required")
    .label("Usernamwe"),
    // .matches(
    //   /^[a-zA-z0-9_]+$0/,
    //   "Username can only contain alphanumeric characters and underscore "
    // ),
  bio: yup.string().min(3).max(250).label("bio"),
  profileType: yup
    .string()
    .oneOf(["public", "private"], "Invalid profileType")
    .default("public"),
});

async function validateSignup(data) {
  // define the vaalidation for the signup
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2)
      .max(50)
      .required("first name is required.")
      .label("first name"),
    lastName: yup
      .string()
      .min(2)
      .max(50)
      .required("last name is required.")
      .label("last name"),
    password: yup
      .string()
      .min(8)
      .max(16)
      .required("password is required.")
      .label(" password"),
    profile: profileSchema,
    email: yup
      .string()
      .max(50)
      .email("provide a valid email")
      .required("Email is required.")
      .label("Email"),
    phone: yup
      .string()
      .max(15)
      .required("phone number is required")
      .label("phone"),
  });
  try {
    const validateSignup = await schema.validate(data);
    return null;
  } catch (error) {
    console.log(error.errors[0]);
    return error?.errors[0];
  }
}

async function validateLogin(data) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("provide a valide email")
      .required("email is required")
      .label("Email"),
    password: yup.string().required("password is required").label("password"),
  });
  try {
    const validateData = await schema.validate(data);
    retun: null;
  } catch (error) {
    console.log(error.errors[0]);
    return error?.error[0];
  }
}

async function validateProfileEdit(data) {
  const schema = yup.object().shape({
    userName: yup
      .string()
      .min(2)
      .max(50)
      .label("username")
      .matches(
        /^[a-zA-z0-9_]+$/,
        "username can only contain alphanumeric characters and underscore  "
      ),
    bio: yup.string().min(3).max(250).label("bio"),
    profileType: yup
      .string()
      .oneOf(["public", "private"], "invalid profiletype")
      .default("public"),
  });
  try {
    const validateData = await schema.validate(data);
  } catch (error) {
    return error?.errors[0];
  }
}
async function validateRequestAction(data) {
  const schema = yup.object().shape({
    username: yup.string().required("username is required").label("username"),
    action: yup
      .string()
      .required("Action cannot be empty")
      .oneOf(
        ["accept", "decline"],
        "you can only accept or decline a friend request"
      ),
  });
  try {
    const validateData = await schema.validate(data);
  } catch (error) {
    return error?.errors[0];
  }
}
async function validateAccountEdit(data) {
  const schema = yup.object().shape({
    firstName: yup.string().min(2).max(50).label("firstName"),
    lastName: yup.string().min(2).max(50).label("lastName"),
    phone: yup.string().min(11).max(15).label("phoneNumber"),
    password: yup
      .string()
      .min(8)
      .max(20)
      .required("password is required")
      .label("password"),
  });
  try {
    const validatData = await schema.validate(data);
  } catch (error) {
    return error?.error[0];
  }
}

module.exports.validateSignup = validateSignup;
module.exports.validateLogin = validateLogin;
module.exports.validateProfileEdit = validateProfileEdit;
module.exports.validateRequestAction = validateRequestAction;
module.exports.validateAccountEdit= validateAccountEdit;
