import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { BsCardHeading, BsPlus } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const GroupPage = () => {
  return (
    <MainLayout title="Groups">
      <section className="w-full h-screen overflow-y-auto overflow-x-hidden flex items-start justify-start mt-[2px]">
        <div className="lg:flex-shrink bg-white md:w-[35%] w-full hidden md:flex flex-col p-3">
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
                  className="h-full w-full pl-2 outline-none bg-transparent text-basegray hidden lg:flex"
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
                  Your feed
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex-grow w-full h-screen overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-4 pb-24">
          hdhde
        </div>
      </section>
    </MainLayout>
  );
};

export default GroupPage;
