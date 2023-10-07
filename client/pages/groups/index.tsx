import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/layout/MainLayout";
import { useAuth } from "@/context/AuthContext";

function GroupsPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const moveToFeeds = () => {
    if (router.pathname === "/groups") {
      router.push(`${isAuthenticated ? "/groups/feed" : "/login"}`);
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
