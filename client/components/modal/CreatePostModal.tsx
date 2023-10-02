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
  
  return <div>CreatePostModal</div>;
};

export default CreatePostModal;
