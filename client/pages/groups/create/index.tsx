import { CustomizeInput } from "@/components";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
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
          <h2 className="text-lg font-bold md:text-2xl">Create Group</h2>
          <div className="flex items-start justify-start gap-2">
            <Image
              src="/img/avatar.png"
              alt="Profile-image"
              width={40}
              height={40}
              className="rounded-full border"
            />
            <div className="flex flex-col items-start justify-start">
              <h2 className="text-base font-medium text-black">Efe Starboy</h2>
              <span className="text-sm font-normal text-[#888] flex items-center gap-1">
                Admin
              </span>
            </div>
          </div>
          <form className="w-full flex flex-col items-start justify-start gap-2">
            <CustomizeInput
              showLabel={false}
              label={
                <span className="text-sm font-medium">
                  Group name <span className="text-danger">*</span>
                </span>
              }
              htmlFor="groupName"
              type="text"
              name="groupName"
              value=""
              onChange={() => {}}
              onBlur={() => {}}
              // error={getError("groupName")}
              id="groupName"
              placeholder="Type your email address"
              className="bg-white border border-[#E3E5E8] h-12 w-full rounded-[5px] px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm text-[#8E97A4] transition-all duration-300"
            />
          </form>
        </div>
        <div className="tab:flex-grow relative w-full tab:h-screen tab:overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-6 pb-24"></div>
      </section>
    </MainLayout>
  );
};

export default Createroup;
