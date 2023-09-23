import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa6";

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
    <div
      className={`absolute w-[300px] tab:w-[450px] flex flex-col items-start justify-start gap-2 bg-bodybg p-5 z-40 top-[100%] shadow-boxShad right-[10px] rounded-md ${
        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } transition-all duration-300`}
    >
      <div className="w-full flex items-center justify-between gap-5">
        <h2 className="text-black text-xl font-semibold tab:text-2xl">
          Notifications
        </h2>
        <span className="cursor-pointer">
          <BsThreeDots size={20} />
        </span>
      </div>
      <div className="w-full flex items-start justify-start flex-col">
        {[0, 1, 2, 3, 4].map((item, i) => (
          <Link
            key={i}
            href="/"
            className="relative w-full flex items-start justify-start gap-3 hover:bg-btngray py-2 px-3 rounded-lg transition-all duration-300"
          >
            <FaUserSecret size={30} />
            <div className="w-full flex flex-col items-start justify-start gap-3">
              <p className="text-sm font-medium md:text-base">
                <b>Hey Efe Starboy</b>, You have a new message from Bruce wayne!
              </p>
            </div>
          </Link>
        ))}
      </div>
      <p className="w-full text-center text-primary text-sm font-medium md:text-base cursor-pointer hover:underline transition-all">
        See all
      </p>
    </div>
  );
};

export default NotificationBox;
