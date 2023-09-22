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
  return <div>MobileNav</div>;
};

export default MobileNav;
