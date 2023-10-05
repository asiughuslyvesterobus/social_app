import MainLayout from "@/layout/MainLayout";

const Createroup = () => {
  return (
    <MainLayout title="Create Group">
      <section className="w-full h-screen overflow-auto flex flex-col tab:flex-row items-start justify-start mt-[2px]">
        <div className="tab:flex-shrink bg-white tab:w-[45%] w-full flex flex-col relative p-3"></div>
        <div className="tab:flex-grow relative w-full tab:h-screen tab:overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-6 pb-24">
          
        </div>
      </section>
    </MainLayout>
  );
};

export default Createroup;
