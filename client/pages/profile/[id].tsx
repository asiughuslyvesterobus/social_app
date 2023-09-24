import MainLayout from "@/layout/MainLayout";

const Profilepage = () => {
  return (
    <MainLayout title="User Profile">
      <section className="w-full flex-col items-start justify-start gap-5">
        <div className="w-full bg-btngray tab:px-5 shadow-boxShad flex gap-5 flex-col items-center justify-center">
          <div className="tab:w-[75%] w-full tab:mx-auto flex flex-col items-start justify-start gap-4">
            <div className="w-full relative h-[120px] tab:h-[240px] bg-primary tab:rounded-bl-md tab:rounded-br-md"></div>
            <div className="w-full tab:w-[90%] tab:mx-auto tab:px-4 flex flex-col items-center justify-start tab:justify-between tab:flex-row border-b border-basegray pb-5">

            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profilepage;
