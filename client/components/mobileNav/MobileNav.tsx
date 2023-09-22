import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavIcons, sideBarLink } from "@/data";
import { NavIconType } from "@/type";

interface MenuProps {
  show: boolean;
  setShow: (e: any) => void;
}

const MobileNav = ({ show, setShow }: MenuProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const activeRoute = (pathname: String) => {
    const currentRoute = router.pathname;

    return currentRoute === pathname;
  };

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
      className={`md:hidden absolute top-[100%] border-t z-50 bg-white shadow-boxShad w-full left-0 p-4 flex-col items-start justify-start ${
        show
          ? "h-screen overflow-y-auto overflow-x-hidden scale-x-100"
          : "h-0 overflow-hidden scale-x-0"
      } transition-all duration-300`}
    >
      {NavIcons.map((item: NavIconType, i: number) => (
        <li
          key={i}
          className={`py-4 flex items-center justify-start gap-4 cursor-pointer ${
            activeRoute(item.href)
              ? "text-primary border-b border-primary"
              : "hover:bg-bodybg mb-1 rounded-lg"
          } transition-all`}
        >
          <Link onClick={() => setShow(false)} href={item.href}>
            <span>
              <item.icon size={20} />
            </span>
          </Link>
          <span className="font-semibold text-sm">{item.tooltip}</span>
        </li>
      ))}
      <ul>
        {sideBarLink.map((item, i) => (
          <li key={i} className="w-full">
            <Link
              href={item.href}
              className="flex items-center justify-start w-full gap-4 py-4 transition-all"
            >
              <Image
                src={item.imgUrl}
                alt={`${item.text}_icon`}
                width={18}
                height={20}
              />
              <span className="text-sm font-semibold">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
