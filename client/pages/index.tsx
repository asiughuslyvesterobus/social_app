import { useState } from "react";
import { CustomizeInput } from "@/components";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/schema";
import { toast } from "react-hot-toast";
import { SignInUser } from "@/type";
import { useRouter } from "next/router";

const Loginpage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: SignInUser = {
    email: "",
    password: "",
  };

  const onSubmit = async (payload: SignInUser, actions: any) => {
    console.log(payload);
    router.push("/home");
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
    validationSchema: loginSchema,
    onSubmit,
  });

  const getError = (key: keyof SignInUser) => {
    return touched[key] && errors[key];
  };

  const toggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>SmartConnect - log in or sign up</title>
        <meta
          name="description"
          content="Connecting People, One Post at a Time"
        />
      </Head>
      <div className="w-full flex flex-col lg:h-screen items-center justify-center lg:flex-row lg:overflow-hidden">
        <div className="w-full md:flex items-center justify-center p-8 hidden bg-primary h-full">
          <div className="lg:w-[436px] h-[549px]">
            <img
              src="/img/signinImg.png"
              alt="sign_in_image"
              className="w-full h-full object-contain img"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
        <div className="bg-white p-4 md:py-10 md:px-6 w-full xl:w-[500px] h-full flex flex-col gap-6 items-start justify-start"></div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
