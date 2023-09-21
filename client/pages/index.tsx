import { useState } from "react";
import { CustomizeInput } from "@/components";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/schema";
import { toast } from "react-hot-toast";
import { SignInUser } from "@/type";
import { useRouter } from "next/router";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

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
        <div className="w-full lg:flex items-center justify-center p-8 hidden bg-primary h-full">
          <div className="lg:w-[436px] h-[549px]">
            <img
              src="/img/signinImg.png"
              alt="sign_in_image"
              className="w-full h-full object-contain img"
            />
          </div>
        </div>
        <div className="w-full flex items-center justify-center h-full bg-white py-10">
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
                    id="remember"
                    name="remember"
                    className="p-2 md:p-[14px] bg-transparent outline-none "
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-[#5B6471] cursor-pointer"
                  >
                    Remember me
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
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
