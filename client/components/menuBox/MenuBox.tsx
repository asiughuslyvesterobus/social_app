import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface MenuProps {
  show: boolean;
  setShow: (e: any) => void;
}

const MenuBox = ({ show, setShow }: MenuProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const variant = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    closed: { opacity: 0, scale: 0, transition: { duration: 0.4 } },
  };
  return <div className="absolute w-[400px] bg-red-500 right-5">MenuBox</div>;
};

export default MenuBox;
