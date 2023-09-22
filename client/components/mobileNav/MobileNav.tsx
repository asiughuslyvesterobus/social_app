import { useRef, useEffect } from "react";

interface MenuProps {
  show: boolean;
  setShow: (e: any) => void;
}

const MobileNav = ({ show, setShow }: MenuProps) => {
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
      className={`md:hidden absolute top-[100%] border-t z-50 bg-white shadow-boxShad w-full left-0 h-screen overflow-y-auto p-4 flex-col gap-4 items-start justify-start`}
    ></div>
  );
};

export default MobileNav;
