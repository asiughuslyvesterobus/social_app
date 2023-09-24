import MainLayout from "@/layout/MainLayout";

const Profilepage = () => {
  return (
    <MainLayout title="User Profile">
      <section className="w-full flex-col items-start justify-start gap-5">
        <div className="w-full bg-btngray tab:px-5 tab:pt-5 shadow-boxShad flex flex-col items-center justify-center">
          <div className="tab:w-[60%] tab:mx-auto flex flex-col items-start justify-start gap-4"></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profilepage;
