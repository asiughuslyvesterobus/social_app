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
  return <div>Registerpage</div>;
};

export default Registerpage;
