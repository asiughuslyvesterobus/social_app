import { ProfileHeadline } from "@/components";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";

const FriendsPage = () => {
  return (
    <MainLayout title="Friends">
      <section className="w-full flex-col items-start justify-start gap-5 h-screen overflow-y-auto overflow-x-hidden pb-20">
        <div className="w-full bg-btngray tab:px-5 shadow-boxShad flex gap-5 flex-col items-center justify-center">
          <ProfileHeadline className="hover:bg-gray-300 rounded-lg" />
        </div>
        <div className="tab:w-[75%] w-full tab:mx-auto flex flex-col items-start justify-start tab:flex-row py-10 gap-8 px-4 tab:px-0">
            
        </div>
      </section>
    </MainLayout>
  );
};

export default FriendsPage;
