import { Navbar } from "@/components";
import Head from "next/head";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

const MainLayout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`SmartConnect - ${title}`}</title>
        <meta
          name="description"
          content="Connecting People, One Post at a Time"
        />
      </Head>
      <main className="overflow-hidden h-screen flex items-start justify-start flex-col">
        <Navbar />
        <main className="w-full">{children}</main>
      </main>
    </>
  );
};

export default MainLayout;
