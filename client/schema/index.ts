import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phone: yup
    .string()
    .min(2, "Phone number provided is not complete")
    .max(13, "Phone number Characters should not be greater than 15 digit")
    .matches(
      /^(?:\+?\d{1,4}[-.\s]?)?(?:\(\d{1,4}\)[-.\s]?)?\d{1,13}$/g,
      "Invalid phone number"
    )
    .required("Required"),
  email: yup.string().email("Invalid Email Address").required("Required"),
  userName: yup
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(25, "Username cannot exceed 25 characters")
    .trim()
    .required("Username is required")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores"
    ),
  bio: yup
    .string()
    .min(3, "Bio must be at least 3 characters")
    .max(250, "Bio cannot exceed 250 characters"),
});
