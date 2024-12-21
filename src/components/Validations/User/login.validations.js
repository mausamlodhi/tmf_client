import * as yup from "yup";

export default function LoginValidations() {
  return yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be valid")
      .matches(
        /^(?:\d{6,15}|[\w-\.]+@([\w-]+\.)+[\w-]{2,6})$/,
        "Please enter a valid email"
      ),
    password:yup
      .string()
      .required("Password is required")
  });
}