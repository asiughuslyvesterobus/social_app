import { RiLiveLine } from "react-icons/ri";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { LiaLaugh } from "react-icons/lia";
import Image from "next/image";

const CreatePostCard = () => {
  return (
    <div className="w-full bg-white p-3 flex flex-col items-start justify-start">
      <div className="w-full flex items-center justify-start gap-4 border-b pb-5 border-btngray">
        <Image
          src="/img/avatar.png"
          alt="User_profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <input
          type="text"
          placeholder="What's on your Mind, Efe"
          className="w-full bg-bodybg h-10 outline-none border border-bodybg focus:border-primary transition-all px-4 text-base font-normal text-basegray placeholder:text-basegray rounded-full"
        />
      </div>
      <div className="flex items-center justify-between gap-4 w-full pt-3">
        <div className="flex items-center gap-4 justify-start w-fit bg-bodybg py-3 px-5 rounded-md cursor-pointer">
          <span className="text-danger">
            <RiLiveLine size={25} />
          </span>
          <span className="text-base font-normal text-basegray">Live video</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePostCard;
