import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { postData } from "@/data";
import { PostCard, ProfileHeadline } from "@/components";
import { useAuth } from "@/context/AuthContext";

const Profilepage = () => {
  const { isAuthenticated } = useAuth();
  return (
    <MainLayout title="User Profile">
      <section className="w-full flex-col items-start justify-start gap-5 h-screen overflow-y-auto overflow-x-hidden pb-20">
        <div className="w-full bg-btngray tab:px-5 shadow-boxShad flex gap-5 flex-col items-center justify-center">
          <ProfileHeadline className="border-primary text-primary border-b-2" />
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
                {isAuthenticated && (
                  <button className="w-full h-12 outline-none text-base font-medium bg-primary text-white mt-3 rounded-md hover:cursor-pointer hover:opacity-95 transition-all duration-300">
                    Edit Bio
                  </button>
                )}
              </div>
            </div>
            <div className="w-full bg-bodybg border shadow-boxShad rounded-lg p-3 flex flex-col items-start justify-start gap-5">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-lg font-bold md:text-2xl">Friends</h2>
                {isAuthenticated && (
                  <Link href="/" className="text-primary text-sm tab:text-base">
                    See all friends
                  </Link>
                )}
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
