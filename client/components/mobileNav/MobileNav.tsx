import { useRouter } from "next/router";
import { useRef, useEffect } from "react";

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
      className={`md:hidden absolute top-[100%] border-t z-50 bg-white shadow-boxShad w-full left-0 h-screen overflow-y-auto p-4 flex-col gap-4 items-start justify-start`}
    ></div>
  );
};

export default MobileNav;
