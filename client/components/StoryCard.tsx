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
        className="w-full h-full object-cover group-hover:scale-[1.08] transition-all"
      />
      <div className="absolute w-full h-full group-hover:bg-black/40 transition-all inset-0 flex items-start justify-between p-4">
        <Image
          src={profileImg}
          alt="user_profile"
          width={30}
          height={30}
          className="rounded-full border-[4px] border-primary"
        />
      </div>
    </div>
  );
};

export default StoryCard;
