import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import AdIcon from "@/data/adImage.json";
import Lottie from "lottie-react";

const RightSidebar = () => {
  const { isAuthenticated } = useAuth();
  const contacts = [
    "Jane Cooper",
    "Islam Ali",
    "John Doe",
    "Albert Flores",
    "Jason Dodd",
  ];

  return (
    <nav
      aria-label="sidebar"
      className="w-full h-screen overflow-y-auto overflow-x-hidden bg-white p-3 flex flex-col items-start justify-start"
    >
      <div className="w-full">
        <Lottie animationData={AdIcon} loop={true} />
      </div>
      {isAuthenticated && (
        <div className="flex flex-col items-start w-full justify-start gap-3 pt-3">
          <div className="flex items-center justify-between w-full">
            <h4 className="text-lg font-semibold text-basegray tracking-tight">
              Contacts
            </h4>
            <div className="flex items-center justify-end gap-4">
              <span className="cursor-pointer text-basegray relative group">
                <FiSearch size={20} />
                <span className="group-hover:opacity-100 group-hover:scale-100 group-hover:visible scale-0 invisible transition-all opacity-0 absolute top-[22px] left-[-185px] bg-btngray/80 py-3 px-4 rounded-xl font-semibold text-sm w-fit">
                  Search by name or group
                </span>
              </span>
              <span className="cursor-pointer text-basegray relative group">
                <HiDotsHorizontal size={20} />
                <span className="group-hover:opacity-100 group-hover:scale-100 group-hover:visible scale-0 invisible transition-all opacity-0 absolute top-[22px] left-[-45px] bg-btngray/80 py-3 px-4 rounded-xl font-semibold text-sm w-fit">
                  Option
                </span>
              </span>
            </div>
          </div>
          <ul className="flex flex-col items-start w-full justify-start gap-1">
            {contacts.map((item, i) => (
              <li key={i} className="w-full">
                <Link
                  href="/"
                  className="flex items-center justify-start w-full gap-2 hover:bg-bodybg py-2 px-2 rounded transition-all"
                >
                  <Image
                    src="/img/avatar.png"
                    alt="contact-images"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span className="text-sm font-semibold text-black tracking-tight">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default RightSidebar;
