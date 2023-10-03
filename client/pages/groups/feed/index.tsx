import MainLayout from "@/layout/MainLayout";

const GroupPage = () => {
  return (
    <MainLayout title="Groups">
      <section className="w-full h-screen overflow-y-auto overflow-x-hidden flex items-start justify-start mt-[2px]">
        <div className="lg:flex-shrink bg-white md:w-[35%] w-full hidden md:flex flex-col p-3">
          <div className="flex flex-col items-start justify-start">
            <h2 className="text-lg font-bold md:text-2xl">Groups</h2>
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
