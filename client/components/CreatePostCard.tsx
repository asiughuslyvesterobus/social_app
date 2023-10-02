import { RiLiveLine } from "react-icons/ri";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { FaLaugh } from "react-icons/fa";
import Image from "next/image";
import { CreatePostModal } from ".";
import { useState } from "react";

const CreatePostCard = () => {
  const [createPostOpen, setCreatePostOpen] = useState(false);
  return (
    <div className="w-full bg-white p-3 flex flex-col items-start justify-start rounded">
      <div className="w-full flex items-center justify-start gap-4 border-b pb-5 border-btngray">
        <Image
          src="/img/avatar.png"
          alt="User_profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div
          onClick={() => setCreatePostOpen(true)}
          className="w-full bg-bodybg h-10 border border-bodybg transition-all duration-300 px-4 text-sm sm:text-base font-normal text-basegray rounded-full items-center flex select-none hover:cursor-pointer"
        >
          What's on your Mind, Efe
        </div>
      </div>
      <div className="flex items-center justify-between lg:justify-evenly w-full pt-3">
        <div className="flex items-center gap-4 justify-start w-fit hover:bg-bodybg transition-all py-3 px-2 sm:px-5 rounded-md cursor-pointer">
          <span className="text-danger">
            <RiLiveLine size={25} />
          </span>
          <span className="text-sm sm:text-base font-medium text-basegray">
            Live video
          </span>
        </div>
        <div className="flex items-center gap-4 justify-start w-fit hover:bg-bodybg transition-all py-3 px-2 sm:px-5 rounded-md cursor-pointer">
          <span className="text-success">
            <MdOutlinePhotoLibrary size={25} />
          </span>
          <span className="text-sm sm:text-base font-medium text-basegray">
            Photo/video
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 justify-start w-fit hover:bg-bodybg transition-all py-3 px-5 rounded-md cursor-pointer">
          <span className="text-warning">
            <FaLaugh size={25} />
          </span>
          <span className="text-base font-medium text-basegray">
            Feeling/activity
          </span>
        </div>
      </div>
      <CreatePostModal show={createPostOpen} setShow={setCreatePostOpen} />
    </div>
  );
};

export default CreatePostCard;
