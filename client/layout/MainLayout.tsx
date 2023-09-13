import { Navbar } from "@/components";
import { ReactNode } from "react";
// import { LeftSideBar, RightSidebar } from "@/components";

type LayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <main className="overflow-hidden h-screen flex items-start justify-start flex-col">
      <Navbar title="Connecting People, One Post at a Time" />
      <main className="w-full">{children}</main>
    </main>
  );
};

export default MainLayout;
