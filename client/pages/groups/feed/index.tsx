import { postData } from "@/data";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment, BiWorld } from "react-icons/bi";
import { BsCardHeading, BsPlus } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdGroupOff } from "react-icons/md";
import { PiShareFatLight } from "react-icons/pi";

const GroupPage = () => {
  return (
    <MainLayout title="Groups">
      <section className="w-full h-screen overflow-auto flex flex-col tab:flex-row items-start justify-start mt-[2px]">
        <div className="tab:flex-shrink bg-white tab:w-[45%] w-full flex flex-col p-3">
          <div className="flex flex-col items-start justify-start gap-4 border-b pb-3">
            <h2 className="text-lg font-bold md:text-2xl">Groups</h2>
            <div className="w-full flex flex-col items-start justify-start relative">
              <div className="flex items-center justify-start bg-bodybg h-10 px-4 rounded-full text-basegray w-full">
                <span className="cursor-pointer">
                  <FiSearch size={20} />
                </span>
                <input
                  type="text"
                  placeholder="Search for groups"
                  className="h-full w-full pl-2 outline-none bg-transparent text-basegray"
                />
              </div>
              <div className="w-full bg-bodybg h-fit p-4 flex-col items-center justify-start absolute bottom-0 z-10 hidden">
                <p>No recent searches</p>
              </div>
            </div>
            <div className="flex flex-col items-start w-full gap-6">
              <Link
                href="/groups/feed"
                className="flex items-center justify-start w-full gap-2 bg-bodybg py-2 px-2 rounded transition-all"
              >
                <span className="text-white w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <BsCardHeading size={20} />
                </span>
                <span className="text-base font-semibold text-black tracking-tight">
                  Your feed
                </span>
              </Link>
              <Link
                href="/groups/create"
                className="flex items-center justify-center w-full gap-2 bg-primary text-white py-2 px-2 rounded transition-all"
              >
                <BsPlus size={25} />
                <span className="text-base font-semibold tracking-tight">
                  Create new group
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="tab:flex-grow relative w-full tab:h-screen overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-6 pb-24">
          {postData.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-start gap-5">
              <span>
                <MdGroupOff className="w-14 h-14 md:w-20 md:h-20 text-basegray" />
              </span>
              <p className="text-2xl text-center font-semibold ">
                No Group has been created yet!
              </p>
              <Link
                href="/groups/create"
                className="flex items-center justify-center w-fit gap-2 bg-primary text-white py-2 px-10 rounded transition-all"
              >
                <BsPlus size={25} />
                <span className="text-base font-semibold tracking-tight">
                  Create new group
                </span>
              </Link>
            </div>
          ) : (
            postData.map((item) => (
              <div
                key={item.id}
                className="w-full bg-white p-3 rounded-lg flex flex-col items-start justify-start h-fit gap-4"
              >
                <div className="w-full flex items-center justify-between gap-4">
                  <Link
                    href={`/profile/${item.id}`}
                    className="flex items-start justify-start gap-2"
                  >
                    <Image
                      src={item.userProfileUrl}
                      alt="group-Profile"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <h2 className="text-base font-medium text-black">
                        {item.userName}
                      </h2>
                      <span className="text-sm font-normal text-[#888] flex items-center gap-1">
                        {item.date}{" "}
                        <span className="w-[3px] h-[3px] bg-basegray inline-block rounded-full"></span>{" "}
                        <BiWorld />
                      </span>
                    </div>
                  </Link>
                  <span className="text-basegray cursor-pointer hover:bg-bodybg w-10 h-10 flex items-center justify-center rounded-full transition-all">
                    <HiDotsHorizontal size={20} />
                  </span>
                </div>
                <div className="h-[700px] w-full bg-basegray/40">
                  <img
                    src={item.userPost}
                    alt="user-post"
                    className="rounded w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-start">
                  <div className="w-full flex items-center justify-between gap-3 py-3 border-b border-btngray">
                    <span className="flex items-center justify-start gap-1">
                      <span>
                        <Image
                          src="/icon/like.svg"
                          alt="like"
                          width={20}
                          height={20}
                        />
                      </span>
                      <span className="text-sm font-normal text-[#888]">
                        1.2k
                      </span>
                    </span>
                    <div className="flex items-center justify-start gap-3">
                      <span className="flex items-center justify-start gap-1 text-[#888]">
                        <span className="text-sm font-normal text-[#888]">
                          1.2k
                        </span>
                        <span>
                          <BiComment size={20} />
                        </span>
                      </span>
                      <span className="flex items-center justify-start gap-1 text-[#888]">
                        <span className="text-sm font-normal text-[#888]">
                          1.2k
                        </span>
                        <span>
                          <PiShareFatLight size={20} />
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-evenly w-full pt-4">
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
              </div>
            ))
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default GroupPage;
