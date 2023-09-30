import { ProfileHeadline } from "@/components";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const FriendsPage = () => {
  return (
    <MainLayout title="Friends">
      <section className="w-full flex-col items-start justify-start gap-5 h-screen overflow-y-auto overflow-x-hidden pb-20">
        <div className="w-full bg-btngray tab:px-5 shadow-boxShad flex gap-5 flex-col items-center justify-center">
          <ProfileHeadline className="hover:bg-gray-300 rounded-lg" />
        </div>
        <div className="tab:w-[75%] w-full tab:mx-auto flex flex-col items-start justify-start py-5 gap-8 px-4 rounded-lg bg-btngray shadow-boxShad mt-8">
          <div className="w-full flex items-center justify-between gap-5 border-b border-gray-400 pb-5">
            <h2 className="text-base font-bold md:text-xl">Friends</h2>
            <div className="flex items-center justify-end gap-5">
              <Link
                href="/friends"
                className="text-sm font-semibold md:text-base text-primary"
              >
                Find Friend
              </Link>
              <div className="flex items-center justify-start bg-bodybg h-10 px-2 rounded-full lg:rounded-xl text-basegray w-fit lg:w-[250px]">
                <span className="cursor-pointer">
                  <FiSearch size={20} />
                </span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-full w-full pl-2 outline-none bg-transparent text-basegray hidden lg:flex"
                />
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start justify-start">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((item, i) => (
              <div className="w-full flex items-center justify-between gap-5 border border-basegray/60 p-4 rounded-lg">
                <div className="flex items-center justify-start gap-3">
                  <img
                    src="https://images.pexels.com/photos/18141660/pexels-photo-18141660/free-photo-of-a-woman-sitting-on-the-steps-with-her-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="friends-profile"
                    className="w-32 h-32 rounded-md"
                  />
                  <div className="flex flex-col items-start justify-start object-cover">
                    <h4 className="text-base font-semibold">Ella beauty</h4>
                    <p className="text-sm font-normal text-basegray">
                      Ibandan, Nigeria
                    </p>
                  </div>
                </div>
                <span className="cursor-pointer">
                  <BsThreeDots size={25} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FriendsPage;
