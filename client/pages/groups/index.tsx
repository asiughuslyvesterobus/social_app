import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/layout/MainLayout";

function GroupsPage() {
  const router = useRouter();

  const moveToFeeds = () => {
    if (router.pathname === "/groups") {
      router.push("/groups/feed");
    }
  };
  useEffect(() => {
    moveToFeeds();
  }, []);

  return (
    <MainLayout title="Groups">
      <img src="/icon/loaderIcon.svg" alt="loading..." width={40} height={40} />
    </MainLayout>
  );
}

export default GroupsPage;
