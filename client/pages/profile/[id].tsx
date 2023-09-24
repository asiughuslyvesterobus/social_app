import MainLayout from "@/layout/MainLayout";
import { ImCamera } from "react-icons/im";
import { BiPlus, BiSolidPencil } from "react-icons/bi";

const Profilepage = () => {
  return (
    <MainLayout title="User Profile">
      <section className="w-full flex-col items-start justify-start gap-5">
        <div className="w-full bg-btngray tab:px-5 shadow-boxShad flex gap-5 flex-col items-center justify-center">
          <div className="tab:w-[75%] w-full tab:mx-auto flex flex-col items-start justify-start">
            <div className="w-full relative h-[120px] tab:h-[240px] bg-primary tab:rounded-bl-md tab:rounded-br-md"></div>
            <div className="w-full tab:w-[95%] tab:mx-auto tab:px-4 flex flex-col items-center justify-start tab:justify-between tab:flex-row border-b pb-4 tab:pb0 border-basegray">
              <div className="flex w-full items-center justify-start flex-col tab:flex-row tab:items-start tab:gap-6 relative">
                <div className="tab:mb-32 mr-40">
                  <div className="absolute bg-btngray rounded-full p-1 -translate-y-14">
                    <img
                      src="/img/avatar.png"
                      alt="userProfile"
                      className="w-40 h-40 rounded-full border-[4px] border-primary"
                    />
                    <span className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bottom-4 right-2 bg-bodybg shadow-boxShad absolute">
                      <ImCamera size={20} />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center tab:items-start tab:flex-grow justify-start tab:pt-5 mt-32 tab:mt-0">
                  <h2 className="text-3xl font-bold tab:text-4xl text-center">
                    Efe Starboy{" "}
                    <span className="font-normal text-xl tab:text-2xl">
                      (@starcodes)
                    </span>
                  </h2>
                  <div className="flex items-center justify-center tab:justify-between flex-col tab:flex-row gap-4 w-full">
                    <p className="text-base font-medium text-gray-600">
                      249 friends
                    </p>
                    <div className="flex items-center justify-ce tab:justify-endnter w-full tab:w-fit gap-3">
                      <button
                        type="button"
                        className="flex w-full tab:w-fit items-center justify-center py-2 px-3 rounded-lg hover:bg-primary/90 transition-all duration-300 gap-2 outline-none text-sm tab:text-base font-medium bg-primary text-white border border-primary"
                      >
                        <BiPlus className="w-4 h-4" />
                        <span>Add a Story</span>
                      </button>
                      <button
                        type="button"
                        className="flex w-full tab:w-fit items-center justify-center py-2 px-3 rounded-lg hover:bg-white/80 transition-all duration-300 gap-2 outline-none text-sm tab:text-base font-medium bg-white text-black border border-white"
                      >
                        <BiSolidPencil className="w-4 h-4" />
                        <span>Edit Profile</span>
                      </button>
                    </div>
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
