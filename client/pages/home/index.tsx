import MainLayout from "@/layout/MainLayout";
import {
  CreatePostCard,
  LeftSidebar,
  PostCard,
  RightSidebar,
  Stories,
} from "@/components";
import { postData } from "@/data";

const Homepage = () => {
  return (
    <MainLayout title="Connecting People, One Post at a Time">
      <section className="w-full h-screen overflow-y-auto overflow-x-hidden flex items-start justify-start mt-[2px]">
        <div className="lg:flex-[0.8] md:w-[35%] w-full hidden md:flex">
          <LeftSidebar />
        </div>
        <div className="lg:flex-[2] w-full h-screen overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-4 pb-24">
          <Stories />
          <CreatePostCard />
          <div className="w-full flex flex-col items-start justify-start gap-6">
            {postData.map((item) => (
              <PostCard key={item.id} post={item} />
            ))}
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
