import { MdClose } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ModalProp {
  show: boolean;
  setShow: (event: any) => void;
}

const CreatePostModal = ({ show, setShow }: ModalProp) => {
  const [content, setContent] = useState("");
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

  const handleSubmit = () => {
    if (content) {
      setContent("");
      setShow(false);
    }
  };

  const variants = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    closed: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full h-full bg-[#00000085] z-40 place-items-center flex justify-center transition-all duration-500 overflow-auto ${
        show ? "flex" : "hidden"
      }`}
    >
      <motion.div
        ref={modalRef}
        animate={show ? "open" : "closed"}
        variants={variants}
        className="lg:w-[450px] w-[90%] bg-white rounded-lg flex flex-col items-start justify-start gap-3 transition-all duration-300 p-4 lg:px-4"
      >
        <div className="w-full flex items-center justify-between gap-4 border-b pb-2">
          <h3 className="text-2xl font-bold">Create Post</h3>
          <span
            onClick={() => {
              setShow(false);
            }}
            className="flex items-center justify-center rounded-full w-10 h-10 bg-btngray cursor-pointer"
          >
            <MdClose className="hover:rotate-180 transition-all duration-300 w-5 h-5" />
          </span>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-6">
          <Link
            href={`/profile/42`}
            className="flex items-center justify-start w-full gap-2 hover:bg-bodybg py-2 px-2 rounded transition-all"
          >
            <Image
              src="/img/avatar.png"
              alt="user_profile"
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="text-base font-semibold text-black tracking-tight">
              Efe Starboy
            </span>
          </Link>
          <div className="w-full flex flex-col">
            <textarea
              name="content"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind Efe"
              className="outline-none border-none h-[200px] w-full text-base md:text-2xl font-medium text-basegray resize-none"
            ></textarea>
            <button
              disabled={!content}
              onClick={handleSubmit}
              className="text-base font-semibold bg-primary text-white transition-all duration-300 disabled:cursor-not-allowed disabled:bg-basegray/40 h-10 outline-none rounded-md"
            >
              Post
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreatePostModal;
