import { useState } from "react";
import { CustomizeInput } from "@/components";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/schema";
import { toast } from "react-hot-toast";

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col h-screen items-center justify-center lg:flex-row lg:overflow-hidden">
      <div></div>
      <div></div>
    </div>
  );
};

export default Loginpage;
