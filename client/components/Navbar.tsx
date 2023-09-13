import Head from "next/head";
import Image from "next/image";

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
          <Image
            src="/img/logo.png"
            alt="ConnectSmart Logo"
            width={62}
            height={48}
          />
        </div>
        <div></div>
        <div></div>
      </nav>
    </>
  );
};

export default Navbar;
