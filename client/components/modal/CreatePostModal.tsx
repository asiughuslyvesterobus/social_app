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
      <div
        className={`${
          show ? "scale-100 opacity-100" : "scale-100 opacity-100"
        } lg:w-[450px] w-full bg-white rounded-lg flex flex-col items-start justify-start gap-3 transition-all duration-300 h-[450px] overflow-y-auto p-4 lg:px-4`}
      >
        <div className="w-full flex items-center justify-between gap-4">
          <h3 className="text-2xl font-bold">Create Post</h3>
          <span
            onClick={() => {
              setShow(false);
            }}
            className="flex items-center justify-center rounded-lg text-secondary cursor-pointer"
          >
            <MdClose
              size={29}
              className="hover:rotate-180 transition-all duration-300"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
