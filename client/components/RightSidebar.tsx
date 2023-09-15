import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

const RightSidebar = () => {
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
      <div className="flex flex-col items-start w-full justify-start gap-3 pt-3">
        <h4 className="text-lg font-semibold text-basegray tracking-tight">
          Your shortcuts
        </h4>
        <ul className="flex flex-col items-start w-full justify-start gap-1">
          {[0, 1, 2, 3].map((item, i) => (
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
                  className="rounded"
                />
                <span className="text-sm font-semibold text-black tracking-tight">
                  UI / UX Designers & Developers
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default RightSidebar;
