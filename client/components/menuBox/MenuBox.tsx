import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface MenuProps {
  show: boolean;
  setShow: (e: any) => void;
}

const MenuBox = ({ show, setShow }: MenuProps) => {
  return <div>MenuBox</div>;
};

export default MenuBox;
