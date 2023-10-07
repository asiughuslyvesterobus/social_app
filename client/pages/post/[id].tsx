import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { postData } from "@/data";
import Head from "next/head";
import { MdClose } from "react-icons/md";
import { BsFillTrash3Fill, BsThreeDots } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { Comments } from "@/components";

const PostDetail = () => {
  const [dropDown, setDropDown] = useState<any>(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();
  const data = postData.find((item) => item.id === router.query.id);

  const variants = {
    open: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    closed: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
  };

  return (
    <>
      <Head>
        <title>{`SmartConnect - ${data?.userName}`}</title>
        <meta
          name="description"
          content="Connecting People, One Post at a Time"
        />
      </Head>
      <div className="flex w-full bg-[#171818] flex-wrap md:flex-nowrap md:h-screen md:overflow-hidden">
        <div className="relative flex-2 w-full md:w-9/12 flex justify-center items-center lg:flex-[2]">
          <div className="absolute top-6 left-2 lg:left-6 flex gap-6 z-50">
            <span className="cursor-pointer" onClick={() => router.back()}>
              <MdClose className="text-white text-[35px]" />
            </span>
          </div>
          <img
            src={data?.userPost}
            alt={data?.userName}
            className="h-[60vh] lg:h-screen w-[90%] lg:w-[60%]"
          />
        </div>
        <div className="lg:h-screen overflow-y-auto w-full lg:flex-[1.2] bg-white">
          <div className="relative w-full">
            <div className="mt-10">
              <div className="w-full flex items-start justify-between px-5">
                <div className="flex gap-3 cursor-pointer rounded">
                  <div className="w-16 h-16">
                    <Link href={`/profile/${data?.id}`}>
                      <img
                        className="rounded-full w-full h-full object-cover"
                        src={data?.userProfileUrl}
                        alt={`${data?.userName} profile photo`}
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href={`/profile/${data?.id}`}>
                      <div className="flex flex-col gap-1 mt-1">
                        <p className="flex items-center gap-2 md:text-md font-bold text-gray-800">
                          {data?.userName}
                          {/* <GoVerified className="text-blue-400 text-md" /> */}
                        </p>
                        <p className="font-medium text-sm text-gray-500 lowercase">
                          @{data?.userName.replace(" ", "")}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <span
                    onClick={() =>
                      setDropDown(dropDown !== data?.id ? data?.id : null)
                    }
                    className="cursor-pointer"
                  >
                    <BsThreeDots size={25} />
                  </span>
                  <motion.div
                    animate={dropDown === data?.id ? "open" : "closed"}
                    variants={variants}
                    className={`w-[200px] bg-white dark:bg-gray-800 border border-gray-400 flex-col items-start rounded-xl overflow-hidden absolute right-0 z-10 ${
                      dropDown === data?.id ? "flex" : "hidden"
                    }`}
                  >
                    <div
                      onClick={() => setDeleteModal(true)}
                      className="flex items-center w-full gap-4 justify-start cursor-pointer p-3 text-base font-medium text-gray-600 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                    >
                      <span>
                        <BsFillTrash3Fill size={20} />
                      </span>
                      <span>Delete Video</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <p className="px-10 text-lg text-gray-600  font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tenetur iure eaque, laborum et quidem.
              </p>
              <div className="mt-5 px-10 py-2 w-full border-y">
                <div className="flex items-center justify-between lg:justify-evenly w-full">
                  <div className="flex items-center gap-2 sm:gap-4 justify-start w-fit hover:bg-bodybg transition-all py-3 px-2 sm:px-5 rounded-md cursor-pointer">
                    <span className="text-[#888]">
                      <AiOutlineLike className="w-4 h-4 sm:w-6 sm:h-6" />
                    </span>
                    <span className="text-sm sm:text-base font-medium text-basegray">
                      Like
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 justify-start w-fit hover:bg-bodybg transition-all py-3 px-2 sm:px-5 rounded-md cursor-pointer">
                    <span className="text-[#888]">
                      <BiComment className="w-4 h-4 sm:w-6 sm:h-6" />
                    </span>
                    <span className="text-sm sm:text-base font-medium text-basegray">
                      Comment
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-4 justify-start w-fit hover:bg-bodybg transition-all py-3 px-2 sm:px-5 rounded-md cursor-pointer">
                    <span className="text-[#888]">
                      <PiShareFatLight className="w-4 h-4 sm:w-6 sm:h-6" />
                    </span>
                    <span className="text-sm sm:text-base font-medium text-basegray">
                      Share
                    </span>
                  </div>
                </div>
              </div>
              <Comments />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
