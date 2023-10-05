import MainLayout from "@/layout/MainLayout";
import { useRouter } from "next/router";
import { FaUserFriends } from "react-icons/fa";

const FriendsPage = () => {
  const router = useRouter();

  return (
    <MainLayout title="Friends">
      <section className="w-full h-screen overflow-auto flex flex-col tab:flex-row items-start justify-start mt-[2px]">
        <div className="tab:flex-shrink bg-white tab:w-[45%] w-full flex flex-col relative p-3">
          <div className="flex flex-col items-start justify-start gap-4 border-b pb-3">
            <h2 className="text-lg font-bold md:text-2xl">Friends</h2>
            <div
              className={`flex items-center justify-start w-full gap-2 bg-bodybg py-3 px-2 rounded transition-all text-lg font-bold md:text-xl`}
            >
              <span className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded-full">
                <FaUserFriends size={20} />
              </span>
              <span>Home</span>
            </div>
          </div>
        </div>
        <div className="tab:flex-grow relative w-full tab:h-screen tab:overflow-y-auto scrollbar-hide p-4 flex flex-col items-start justify-start gap-6 pb-24">
          <h2 className="text-xl font-bold md:text-2xl">People you may know</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start justify-start gap-6">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <div
                key={i}
                className="w-full flex flex-col items-start justify-start border border-basegray shadow-boxShad gap-4 rounded-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9vZGllfGVufDB8fDB8fHww&w=1000&q=80"
                  alt="friends-image"
                  className="w-full h-[180px] object-cover"
                />
                <div className="flex flex-col items-start gap-6 w-full p-4">
                    <h2 className="text-lg font-bold">Mike Williams</h2>
                    <div className="flex flex-col items-center justify-center gap-5">
                        <button type="button">Add Friend</button>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FriendsPage;
