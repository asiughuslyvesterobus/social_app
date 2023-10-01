import MainLayout from "@/layout/MainLayout";
import Lottie from "lottie-react";
import LoginIcon from "@/data/comingsoon.json";

const ComingSoonPage = () => {
  return (
    <MainLayout title="Coming soon">
      <div className="w-full flex flex-col items-center justify-center gap-4 h-screen overflow-hidden">
        <div className="tab:w-[536px]">
          <Lottie animationData={LoginIcon} loop={true} />
        </div>
        <p className="text-center text-sm font-medium md:text-base tab:text-lg max-w-[500px]">
          Get ready to embark on a journey like never before. We're cooking up
          something extraordinary just for YOU! 🌐✨
        </p>
      </div>
    </MainLayout>
  );
};

export default ComingSoonPage;
