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
          <Link
            href="/home"
            className="flex tab:hidden flex-col items-center justify-center"
          >
            <Image
              src="/img/logo.png"
              alt="ConnectSmart Logo"
              width={62}
              height={38}
            />
            <h2 className="text-xl font-semibold text-primary -translate-y-4 select-none">
              SmartConnect
            </h2>
          </Link>
          <div className="p-4 md:py-10 md:px-6 w-full xl:w-[500px] h-full flex flex-col gap-6 items-start justify-start">
            <h2 className="text-dark text-lg md:text-3xl font-bold">
              <span className="flex items-center justify-start gap-1">
                Welcome back <img src="/icon/emoji.png" alt="smile" />
              </span>{" "}
              <span className="hidden lg:block">Sign in</span>
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col items-start justify-start gap-5"
            >
              <CustomizeInput
                showLabel={false}
                label={
                  <span>
                    Email <span className="text-danger">*</span>
                  </span>
                }
                htmlFor="email"
                labelClassName="text-base font-normal text-dark2"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("email")}
                id="email"
                placeholder="Type your email address"
                className="bg-white border border-[#E3E5E8] h-12 w-full rounded-[5px] px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm text-[#8E97A4] transition-all duration-300"
              />
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="password">
                  Password <span className="text-danger">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password*"
                    maxLength={60}
                    className={`outline-none w-full h-12 border rounded-[5px] border-[#E3E5E8] focus:border-[1.5px] focus:border-primary px-4 bg-white text-sm text-[#8E97A4] font-normal transition-all duration-300 ${
                      errors.password && touched.password
                        ? "!border-red-500 focus:!border-red-500"
                        : ""
                    }`}
                  />
                  <span
                    onClick={toggle}
                    className="border-[#E3E5E8] px-2 absolute top-0 right-0 h-full flex items-center justify-center text-[#8E97A4] cursor-pointer"
                  >
                    {showPassword ? (
                      <AiOutlineEye size={20} />
                    ) : (
                      <AiOutlineEyeInvisible size={20} />
                    )}
                  </span>
                </div>

                {errors.password && (
                  <p className="text-red-600 text-xs">{`${errors.password}`}</p>
                )}
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name="privacy_policy_accepted"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="privacy_policy_accepted"
                    className="p-2 md:p-[14px] bg-transparent outline-none "
                  />
                  <label
                    htmlFor="privacy_poclicy_accepted"
                    className={`text-sm font-normal cursor-pointer translate-x-6 tab:translate-x-2 ${
                      errors.privacy_policy_accepted && "text-red-500"
                    }`}
                  >
                    {errors.privacy_policy_accepted
                      ? errors.privacy_policy_accepted
                      : "By creating an account means you agree to the Terms and Conditions, and our Privacy Policy"}
                  </label>
                </div>

                <Link
                  href="/recoverpassword"
                  className="text-sm text-[#454B54] hover:text-primary transition-all duration-300 font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary h-[50px] text-white rounded-lg disabled:opacity-75 disabled:cursor-not-allowed outline-none"
              >
                Sign Up
              </button>
            </form>
            <p className="w-full flex items-center justify-center gap-1 font-normal text-[#5B6471] py-2">
              Already have an account?
              <Link href="/" className="text-primary font-medium">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerpage;
