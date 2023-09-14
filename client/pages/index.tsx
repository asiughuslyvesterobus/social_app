import { LeftSidebar, RightSidebar } from "@/components";
import MainLayout from "@/layout/MainLayout";

const Homepage = () => {
  return (
    <MainLayout>
      <section className="w-full h-screen overflow-hidden flex items-start justify-start">
        <div className="lg:flex-[1] w-full  hidden lg:flex">
          <LeftSidebar />
        </div>
        <div className="lg:flex-[2] w-full h-screen overflow-y-auto scrollbar-hide">
          children
        </div>
        <div className="lg:flex-[1] hidden lg:flex">
          <RightSidebar />
        </div>
      </section>
    </MainLayout>
  );
};

export default Homepage;
