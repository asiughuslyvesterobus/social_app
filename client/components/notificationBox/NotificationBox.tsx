import { useRef, useEffect } from "react";
import Link from "next/link";
import { FaUserSecret } from "react-icons/fa6";
import { RiCloseFill } from "react-icons/ri";

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
      ref={modalRef}
      className={`absolute w-[300px] tab:w-[450px] flex flex-col items-start justify-start gap-2 bg-bodybg p-5 z-40 top-[100%] shadow-boxShad right-[10px] rounded-md h-[85vh] tab:h-fit overflow-x-hidden overflow-y-auto ${
        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } transition-all duration-300`}
    >
      <div className="w-full flex item-end justify-end">
        <span onClick={() => setShow(false)} className="cursor-pointer">
          <RiCloseFill size={25} />
        </span>
      </div>
      <div className="w-full flex items-center justify-between gap-5 relative">
        <h2 className="text-black text-xl font-semibold tab:text-2xl">
          Notifications
        </h2>
      </div>
      <div className="w-full flex items-start justify-start flex-col">
        {[0, 1, 2, 3, 4].map((item, i) => (
          <Link
            key={i}
            href="/notification"
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
      <Link
        href="/notification"
        className="w-full text-center text-primary text-sm font-semibold md:text-base cursor-pointer hover:underline transition-all"
      >
        See all
      </Link>
    </div>
  );
};

export default NotificationBox;
