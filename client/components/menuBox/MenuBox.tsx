import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdSettings } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { RiCloseFill } from "react-icons/ri";

interface MenuProps {
  show: boolean;
  setShow: (e: any) => void;
}

const MenuBox = ({ show, setShow }: MenuProps) => {
  const { logout } = useAuth();
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  const variant = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    closed: { opacity: 0, scale: 0, transition: { duration: 0.4 } },
  };
  return (
    <motion.div
      ref={modalRef}
      animate={show ? "open" : "closed"}
      variants={variant}
      className="absolute w-[300px] flex flex-col items-start justify-start gap-2 bg-bodybg p-5 z-40 top-[100%] shadow-boxShad right-3 md:right-5 rounded-md"
    >
      <span
        onClick={() => setShow(false)}
        className="absolute top-3 right-3 text-borderColor cursor-pointer"
      >
        <RiCloseFill size={25} />
      </span>
      <Link
        href={`/profile/42`}
        className="flex items-center justify-start w-full gap-2 hover:bg-btngray py-2 px-3 rounded-lg transition-all duration-300"
      >
        <img
          src="/img/avatar.png"
          alt="user_profile"
          className="rounded-full w-8 h-8 md:w-10 md:h-10"
        />
        <span className="text-base md:text-lg font-semibold text-black tracking-tight">
          Efe Starboy
        </span>
      </Link>

      <Link
        href={`/profile/42`}
        className="flex items-center justify-start w-full gap-2 hover:bg-btngray py-3 px-3 rounded-lg transition-all duration-300"
      >
        <MdSettings size={25} className="text-black" />
        <span className="text-base font-semibold text-black tracking-tight">
          Settings & privacy
        </span>
      </Link>
      <span
        onClick={(e) => {
          logout(e);
          router.push("/login");
        }}
        className="flex cursor-pointer items-center justify-start w-full gap-2 hover:bg-btngray py-3 px-3 rounded-lg transition-all duration-300"
      >
        <VscSignOut size={25} className="text-black" />
        <span className="text-base font-semibold text-black tracking-tight">
          Sign Out
        </span>
      </span>
    </motion.div>
  );
};

export default MenuBox;
