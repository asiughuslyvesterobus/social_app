import MainLayout from "@/layout/MainLayout";
import { ImCamera } from "react-icons/im";
import { BiPlus, BiSolidPencil } from "react-icons/bi";
import Link from "next/link";
import { postData } from "@/data";
import { PostCard } from "@/components";

const Profilepage = () => {
  return (
    <MainLayout title="User Profile">
      <section className="w-full flex-col items-start justify-start gap-5 h-screen overflow-y-auto overflow-x-hidden pb-20">
        <div className="w-full bg-btngray tab:px-5 shadow-boxShad flex gap-5 flex-col items-center justify-center">
          <div className="tab:w-[75%] w-full tab:mx-auto flex flex-col items-start justify-start">
            <div className="w-full relative h-[120px] tab:h-[240px] bg-primary tab:rounded-bl-md tab:rounded-br-md"></div>
            <div className="w-full tab:w-[95%] tab:mx-auto tab:px-4 flex flex-col items-start justify-start">
              <div className="flex w-full items-center justify-start flex-col tab:flex-row tab:items-start tab:gap-6 relative  border-b pb-4 tab:pb-0 border-basegray">
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

              <h2 className="text-base font-medium tab:text-xl text-primary border-b-2 ml-3 tab:ml-0 border-primary pt-5 pb-2 px-2 select-none">
                Details
              </h2>
            </div>
          </div>
        </div>
        <div className="tab:w-[75%] w-full tab:mx-auto flex flex-col items-start justify-start tab:flex-row py-10 gap-8 px-4 tab:px-0">
          <div className="w-full tab:flex-[1] flex flex-col items-start justify-start gap-5 sticky top-0">
            <div className="w-full bg-bodybg border shadow-boxShad rounded-lg p-3 flex flex-col items-start justify-start gap-5">
              <h2 className="text-lg font-bold md:text-2xl">Intro</h2>
              <div className="w-full flex flex-col items-center justify-center">
                <p className="text-sm text-center font-normal md:text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dicta,
                </p>
              </div>
            </div>
            <div className="w-full bg-bodybg border shadow-boxShad rounded-lg p-3 flex flex-col items-start justify-start gap-5">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-lg font-bold md:text-2xl">Friends</h2>
                <Link href="/" className="text-primary text-sm tab:text-base">
                  See all friends
                </Link>
              </div>
              <div className="w-full grid grid-cols-3 gap-3 items-start justify-start">
                {[0, 1, 2.3, 4, 5, 6, 8, 9, 10].map((item, i) => (
                  <div className="w-full flex flex-col items-center justify-center gap-1">
                    <div className="w-full h-20 md:h-[100px] cursor-pointer">
                      <img
                        src="https://images.pexels.com/photos/18141660/pexels-photo-18141660/free-photo-of-a-woman-sitting-on-the-steps-with-her-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="friends_image"
                        className="w-full h-full rounded-md object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-medium text-center">
                      Jane Smith
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full tab:flex-[1.3] h-full overflow-y-auto overflow-x-hidden scrollbar-hide p-3 flex flex-col items-start justify-start gap-5">
            <div className="w-full flex flex-col items-start justify-start gap-6">
              {postData.map((item) => (
                <PostCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Profilepage;
