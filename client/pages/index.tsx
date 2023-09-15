import MainLayout from "@/layout/MainLayout";
import {
  CreatePostCard,
  LeftSidebar,
  RightSidebar,
  Stories,
} from "@/components";

const Homepage = () => {
  return (
    <MainLayout>
      <section className="w-full h-screen overflow-hidden flex items-start justify-start mt-[2px]">
        <div className="lg:flex-[0.8] md:w-[35%] w-full hidden md:flex">
          <LeftSidebar />
        </div>
        <div className="lg:flex-[2] w-full h-screen overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-4">
          <Stories />
          <CreatePostCard />
        </div>
        <div className="lg:flex-[0.8] hidden lg:flex">
          <RightSidebar />
        </div>
      </section>
    </MainLayout>
  );
};

export default Homepage;
