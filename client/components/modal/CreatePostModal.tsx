import { MdClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

interface ModalProp {
  show: boolean;
  setShow: (event: any) => void;
}

const CreatePostModal = ({ show, setShow }: ModalProp) => {
  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    const handleClickOutside = (event: MouseEvent) => {
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
      className={`fixed top-0 right-0 w-full h-full bg-[#00000085] z-40 place-items-center flex justify-center transition-all duration-500 overflow-auto ${
        show ? "flex" : "flex"
      }`}
    >

    </div>
  );
};

export default CreatePostModal;
