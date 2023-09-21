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

  const initialValues: SignUpUser = {
    firstName: "",
    lastName: "",
    phone: "",
    bio: "",
    email: "",
    userName: "",
    password: "",
    confirm_password: "",
    privacy_policy_accepted: false,
  };

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
  return (
    <>
      <Head>
        <title>
          SmartConnect - Get Started, and connect with anyone around the world
        </title>
        <meta
          name="description"
          content="Connecting People, One Post at a Time"
        />
      </Head>
      <div className="w-full flex flex-col tab:h-screen items-center justify-center tab:flex-row tab:overflow-hidden">
        <div className="w-full tab:flex items-center justify-center p-8 hidden bg-primary h-full">
          <div className="tab:w-[436px] h-[549px]">
            <img
              src="/img/signupImg.png"
              alt="sign_in_image"
              className="w-full h-full object-contain img"
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center h-full overflow-y-auto overflow-x-hidden bg-white py-4 md:py-10">

        </div>
      </div>
    </>
  );
};

export default Registerpage;
