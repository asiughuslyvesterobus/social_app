import { StoryProp } from "@/type";
import Image from "next/image";

const StoryCard = ({ profileImg, profileName, storyImage }: StoryProp) => {
  return (
    <div className="w-full h-full rounded-md relative overflow-hidden group cursor-pointer">
      <Image
        src={storyImage}
        alt="story"
        width={100}
        height={100}
        className="w-full h-full group-hover:scale-[1.08] transition-all"
      />
      <div className="absolute w-full h-full bg-black/30 transition-all inset-0 flex items-start justify-between p-4 flex-col">
        <Image
          src={profileImg}
          alt="user_profile"
          width={30}
          height={30}
          className="rounded-full border-[4px] border-primary"
        />
        <span className="text-lg text-white font-semibold">{profileName}</span>
      </div>
    </div>
  );
};

export default StoryCard;
