import Image from "next/image";
import Link from "next/link";
import { BiWorld, BiComment } from "react-icons/bi";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";

interface PostCardProp {
  id: String | Number;
  userProfileUrl: any;
  userName: String;
  date: String;
  userPost: any;
}

interface IProp {
  post: PostCardProp;
}

const PostCard = ({ post }: IProp) => {
  return (
    <div className="w-full bg-white p-3 rounded-lg flex flex-col items-start justify-start h-fit gap-4">
      <div className="w-full flex items-center justify-between gap-4">
        <Link
          href={`/profile/${post.id}`}
          className="flex items-start justify-start gap-2"
        >
          <Image
            src={post.userProfileUrl}
            alt="User-Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-base font-medium text-black">
              {post.userName}
            </h2>
            <span className="text-sm font-normal text-[#888] flex items-center gap-1">
              {post.date}{" "}
              <span className="w-[3px] h-[3px] bg-basegray inline-block rounded-full"></span>{" "}
              <BiWorld />
            </span>
          </div>
        </Link>
        <span className="text-basegray cursor-pointer hover:bg-bodybg w-10 h-10 flex items-center justify-center rounded-full transition-all">
          <HiDotsHorizontal size={20} />
        </span>
      </div>
      <div className="max-h-[800px] w-full">
        <img
          src={post.userPost}
          alt="user-post"
          className="rounded w-full h-auto"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-4">
        <div className="w-full flex items-center justify-between gap-3 py-3 border-b border-btngray">
          <span className="flex items-center justify-start gap-1">
            <span>
              <Image src="/icon/like.svg" alt="like" width={20} height={20} />
            </span>
            <span className="text-sm font-normal text-[#888]">1.2k</span>
          </span>
          <div className="flex items-center justify-start gap-3">
            <span className="flex items-center justify-start gap-1 text-[#888]">
              <span className="text-sm font-normal text-[#888]">1.2k</span>
              <span>
                <BiComment size={20} />
              </span>
            </span>
            <span className="flex items-center justify-start gap-1 text-[#888]">
              <span className="text-sm font-normal text-[#888]">1.2k</span>
              <span>
                <PiShareFatLight size={20} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
