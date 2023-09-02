const yup = required("yup");

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

module.exports.validateSignup = validateSignup;
module.exports.validateLogin = validateLogin;
