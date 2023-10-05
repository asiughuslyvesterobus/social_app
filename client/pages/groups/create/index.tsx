import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Createroup = () => {
  return (
    <MainLayout title="Create Group">
      <section className="w-full h-screen overflow-auto flex flex-col tab:flex-row items-start justify-start mt-[2px]">
        <div className="tab:flex-shrink bg-white tab:w-[45%] w-full flex flex-col relative p-3 gap-3">
          <p className="flex items-center justify-start gap-1 text-xs font-normal">
            <Link href="/groups/feed" className="hover:underline">
              Group
            </Link>
            <FiChevronRight />
            <span>Create Group</span>
          </p>
          <h2 className="text-lg font-bold md:text-2xl">Create Gruop</h2>
        </div>
        <div className="tab:flex-grow relative w-full tab:h-screen tab:overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-6 pb-24"></div>
      </section>
    </MainLayout>
  );
};

export default Createroup;
