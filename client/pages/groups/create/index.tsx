import { CustomizeInput, ProtectedRoute } from "@/components";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Createroup = () => {
  return (
    <MainLayout title="Create Group">
      <ProtectedRoute>
        <section className="w-full h-screen overflow-auto flex flex-col tab:flex-row items-start justify-start gap-6 mt-[2px]">
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
                <h2 className="text-base font-medium text-black">
                  Efe Starboy
                </h2>
                <span className="text-sm font-normal text-[#888] flex items-center gap-1">
                  Admin
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
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
                placeholder="Group name"
                className="bg-white border border-[#E3E5E8] h-12 w-full rounded-[5px] px-4 focus:border-[1.5px] focus:border-primary outline-none text-sm text-[#8E97A4] transition-all duration-300"
              />
              <button
                type="submit"
                disabled={true}
                className="w-full bg-primary h-[50px] text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed outline-none mt-6"
              >
                Create
              </button>
            </div>
          </div>
          <div className="tab:flex-grow relative w-full tab:h-[80vh] tab:overflow-y-auto scrollbar-hide pt-3 flex flex-col items-start justify-start gap-6">
            <div className="bg-white w-[90%] h-full overflow-y-auto  pb-4 overflow-x-hidden flex flex-col items-start justify-star gap-3 rounded-lg pl-4">
              <div className="w-full flex items-center justify-center">
                <img
                  src="/img/connect.png"
                  alt="groupImage"
                  className="grayscale"
                />
              </div>
              <h2 className="text-lg font-bold md:text-2xl tab:tex-4xl">
                Group name
              </h2>
            </div>
          </div>
        </section>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default Createroup;
