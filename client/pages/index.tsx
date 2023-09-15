import { LeftSidebar, RightSidebar } from "@/components";
import MainLayout from "@/layout/MainLayout";
import { FiPlus } from "react-icons/fi";

const Homepage = () => {
  return (
    <MainLayout>
      <section className="w-full h-screen overflow-hidden flex items-start justify-start mt-[2px]">
        <div className="lg:flex-[0.8] w-full hidden md:flex">
          <LeftSidebar />
        </div>
        <div className="lg:flex-[2] w-full h-screen overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-4">
          <div className="bg-white py-4 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 px-2">
            <div className="relative w-full flex flex-col items-center justify-center rounded-md overflow-hidden cursor-pointer">
              <div className="relative group overflow-hidden rounded-tr-md rounded-tl-md">
                <img
                  src="/img/avatar.png"
                  alt="user_profile"
                  className="w-full h-[200px] object-cover mix-blend-darken group-hover:scale-[1.08] transition-all"
                />
                <div className="absolute w-full h-full group-hover:bg-black/40 transition-all inset-0"></div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 bg-basegray w-full text-white pt-6 pb-2 relative">
                <span className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full absolute -top-5">
                  <FiPlus size={20} />
                </span>
                <span>Create story</span>
              </div>
            </div>

            {}
          </div>
        </div>
        <div className="lg:flex-[0.8] hidden lg:flex">
          <RightSidebar />
        </div>
      </section>
    </MainLayout>
  );
};

export default Homepage;
