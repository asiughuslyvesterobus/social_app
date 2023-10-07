import { useState, useEffect, useRef } from "react";
import MainLayout from "@/layout/MainLayout";
import Link from "next/link";
import { FaUserSecret } from "react-icons/fa";
import { ProtectedRoute } from "@/components";

const NotificationPage = () => {
  const [data, setData] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const notificationContainerRef = useRef<HTMLDivElement>(null);

  const fetchData = () => {
    setLoading(true);
    // Simulate fetching more data (e.g., from an API)
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, i) => i + data.length);
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = () => {
    if (
      notificationContainerRef.current &&
      window.innerHeight + window.scrollY >=
        notificationContainerRef.current.scrollHeight - 50 &&
      !loading
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout title="Notifcation">
      <ProtectedRoute>
        <div className="w-full flex items-center justify-center mt-5">
          <div
            ref={notificationContainerRef}
            className="w-full md:w-[500px] bg-white h-[90vh] rounded-md flex flex-col overflow-y-auto scrollbar-hide overflow-x-hidden gap-6 p-4"
          >
            <div className="w-full flex items-center justify-between gap-2">
              <h2 className="text-xl font-bold md:text-2xl">Notifications</h2>
              <span className="text-sm md:text-base font-semibold cursor-pointer">
                Read All
              </span>
            </div>
            <div className="w-full flex items-start justify-start flex-col">
              {/* <div className="animate-pulse flex space-x-4 w-full">
              <div className="rounded-full bg-slate-400 h-10 w-10"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-2 bg-slate-400 rounded"></div>
                <div className="h-2 bg-slate-400 rounded"></div>
                <div className="w-[50%] h-2 bg-slate-400 rounded"></div>
              </div>
            </div> */}
              {data.map((item, i) => (
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
              ))}
              {loading && <p>Loading...</p>}
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </MainLayout>
  );
};

export default NotificationPage;
