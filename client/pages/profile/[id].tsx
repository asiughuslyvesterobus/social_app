import MainLayout from "@/layout/MainLayout";

const Profilepage = () => {
  return (
    <MainLayout title="User Profile">
      <section className="w-full flex-col items-start justify-start gap-5">
        <div className="w-full bg-btngray tab:px-5 shadow-boxShad flex gap-5 flex-col items-center justify-center">
          <div className="tab:w-[75%] w-full tab:mx-auto flex flex-col items-start justify-start">
            <div className="w-full relative h-[120px] tab:h-[240px] bg-primary tab:rounded-bl-md tab:rounded-br-md"></div>
            <div className="w-full tab:w-[90%] tab:mx-auto tab:px-4 flex flex-col items-center justify-start tab:justify-between tab:flex-row border-b border-basegray">
              <div className="flex w-full items-center justify-start flex-col tab:flex-row tab:items-start tab:gap-6 relative">
                <div className="absolute tab:relative bg-btngray rounded-full p-1 -translate-y-14">
                  <img
                    src="/img/avatar.png"
                    alt="userProfile"
                    className="w-40 h-40 rounded-full border-[4px] border-primary"
                  />
                </div>
                <div className="flex flex-col items-center tab:items-start flex-grow justify-start tab:pt-5 mt-32 tab:mt-0">
                  <h2 className="text-3xl font-bold tab:text-4xl">
                    Efe Starboy
                  </h2>
                  <div className="flex items-center justify-center tab:justify-between flex-col tab:flex-row gap-4 w-full">
                    <p className="text-base font-medium text-gray-600">
                      249 friends
                    </p>
                    <p>djdjd</p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profilepage;
