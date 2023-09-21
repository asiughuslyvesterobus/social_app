import { useState } from "react";
import { CustomizeInput, CustomizeTextarea } from "@/components";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { registerSchema } from "@/schema";
import toast from "react-hot-toast";
import { SignUpUser } from "@/type";
import { useRouter } from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Image from "next/image";

const Registerpage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (payload: SignUpUser, actions: any) => {
    console.log(payload);
    router.push("/");
    toast.success("Registrated Successfully 😊!", {
      duration: 2000,
    });
    await new Promise((res) => setTimeout(res, 1000));
    actions.resetForm();
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit,
  });

  const getError = (key: keyof SignUpUser) => {
    return touched[key] && errors[key];
  };

  const toggle = () => {
    setShowPassword((prev) => !prev);
  };
  const toggleConfirm = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  return <div>Registerpage</div>;
};

export default Registerpage;
