import MainLayout from "@/layout/MainLayout";

const Homepage = () => {
  return (
    <MainLayout>
      <section className="w-full h-screen overflow-hidden flex items-start justify-start">
        <div className="lg:flex-[1] w-full border-b lg:border-none">
          <LeftSideBar />
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
