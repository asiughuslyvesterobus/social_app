import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavIcons } from "@/data";
import { NavIconType } from "@/type";
import { FiSearch } from "react-icons/fi";
import { BsMessenger, BsBell } from "react-icons/bs";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const router = useRouter();

  const activeRoute = (pathname: String) => {
    const currentRoute = router.pathname;

    return currentRoute === pathname;
  };

  return (
    <nav
      aria-label="header"
      className="w-full h-16 bg-white flex items-center justify-between gap-3 md:gap-10"
    >
      <div className="flex items-center justify-start gap-3">
        <Link href="/home">
          <Image
            src="/img/logo.png"
            alt="ConnectSmart Logo"
            width={62}
            height={48}
          />
        </Link>
        <div className="flex items-center justify-start bg-bodybg h-10 px-2 rounded-full lg:rounded-xl text-basegray w-fit lg:w-[250px]">
          <span className="cursor-pointer">
            <FiSearch size={20} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className="h-full w-full pl-2 outline-none bg-transparent text-basegray hidden lg:flex"
          />
        </div>
      </div>
      <ul className="md:flex hidden items-center gap-5 h-full pt-2">
        {NavIcons.map((item: NavIconType, i: number) => (
          <li
            key={i}
            className={`group relative py-4 px-10 h-full flex flex-col items-center justify-center cursor-pointer ${
              activeRoute(item.href)
                ? "text-primary border-b-2 border-primary"
                : "hover:bg-bodybg mb-1 rounded-lg"
            } transition-all`}
          >
            <Link href={item.href}>
              <span>
                <item.icon size={29} />
              </span>
            </Link>
            <span className="group-hover:opacity-100 group-hover:scale-100 group-hover:visible scale-0 invisible transition-all opacity-0 absolute top-[62px] bg-btngray py-2 px-4 rounded-xl font-semibold text-sm z-10">
              {item.tooltip}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3 sm:gap-5 h-full pr-4 md:pr-6">
        <span className="w-10 h-10 bg-btngray flex md:hidden items-center justify-center rounded-full cursor-pointer">
          <FaBars size={20} />
        </span>
        <span className="w-10 h-10 bg-btngray flex items-center justify-center rounded-full cursor-pointer">
          <BsMessenger size={20} />
        </span>
        <span className="w-10 h-10 bg-btngray flex items-center justify-center rounded-full cursor-pointer">
          <BsBell size={20} />
        </span>
        <Image
          src="/img/avatar.png"
          alt="user-avatar"
          width={39}
          height={39}
          className="rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
