import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { useAuth } from "@/context/AuthContext";

interface NotificationProps {
  show: boolean;
  setShow: (e: any) => void;
}

const NotificationBox = ({ show, setShow }: NotificationProps) => {
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

  return (
    <div className="absolute w-[300px] flex flex-col items-start justify-start gap-2 bg-bodybg p-5 z-40 top-[140%] shadow-boxShad right-0 rounded-md">
      NotificationBox
    </div>
  );
};

export default NotificationBox;
