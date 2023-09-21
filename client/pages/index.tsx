import { useState } from "react";
import { CustomizeInput } from "@/components";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import { loginSchema } from "@/schema";
import { toast } from "react-hot-toast";
import {SignInUser} from "@/type"

const Loginpage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues:  = {
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: "",
    group_size: "",
    privacy_poclicy_accepted: false,
  };

  const toggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col lg:h-screen items-center justify-center lg:flex-row lg:overflow-hidden">
      <div className="w-full md:flex items-center justify-center p-8 hidden bg-primary h-full">
        <div className="lg:w-[436px] h-[549px]">
          <img
            src=""
            alt="sign_in_image"
            className="w-full h-full object-contain img"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center"></div>
    </div>
  );
};

export default Loginpage;
