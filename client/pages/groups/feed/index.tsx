import MainLayout from "@/layout/MainLayout";
import { FiSearch } from "react-icons/fi";

const GroupPage = () => {
  return (
    <MainLayout title="Groups">
      <section className="w-full h-screen overflow-y-auto overflow-x-hidden flex items-start justify-start mt-[2px]">
        <div className="lg:flex-shrink bg-white md:w-[35%] w-full hidden md:flex flex-col p-3">
          <div className="flex flex-col items-start justify-start gap-4">
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
