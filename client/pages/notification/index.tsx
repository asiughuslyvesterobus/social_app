import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { FaUserSecret } from "react-icons/fa";

const NotificationPage = () => {
  return (
    <MainLayout title="Notifcation">
      <div className="w-full flex items-center justify-center mt-5">
        <div className="w-full md:w-[500px] bg-white h-[90vh] rounded-md flex flex-col overflow-y-auto scrollbar-hide overflow-x-hidden gap-6 p-4">
          <div className="w-full flex items-center justify-between gap-2">
            <h2 className="text-xl font-bold md:text-2xl">Notifications</h2>
            <span className="text-sm md:text-base font-semibold cursor-pointer">
              Read All
            </span>
          </div>
          <div className="w-full flex items-start justify-start flex-col">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, i) => (
                <Link
                  key={i}
                  href="/notification"
                  className="relative w-full flex items-start justify-start gap-3 hover:bg-btngray py-2 px-3 rounded-lg transition-all duration-300"
                >
                  <FaUserSecret size={30} />
                  <div className="w-full flex flex-col items-start justify-start gap-3">
                    <p className="text-sm font-medium md:text-base">
                      <b>Hey Efe Starboy</b>, You have a new message from Bruce
                      wayne!
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotificationPage;
