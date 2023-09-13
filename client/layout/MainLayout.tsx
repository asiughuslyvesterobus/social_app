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
      <div className="lg:flex-[2] w-full h-screen overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
