import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";

const Navbar = ({ title }: { title: String }) => {
  return (
    <>
      <Head>
        <title>{`ConnectSmart - ${title}`}</title>
        <meta
          name="description"
          content="Connecting People, One Post at a Time"
        />
      </Head>
      <nav className="w-full h-16 bg-white flex items-center justify-between gap-10">
        <div className="flex items-center justify-start gap-3">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="ConnectSmart Logo"
              width={62}
              height={48}
            />
          </Link>
          <div className="flex items-center justify-start bg-bodybg h-10 px-2 rounded-xl text-basegray w-[250px]">
            <span className="cursor-pointer">
              <FiSearch size={20} />
            </span>
            <input type="text" placeholder="Search..." className="h-full w-full pl-2 outline-none bg-transparent text-basegray " />
          </div>
        </div>
        <div></div>
        <div></div>
      </nav>
    </>
  );
};

export default Navbar;
