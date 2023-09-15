import Image from "next/image";
import Link from "next/link";

const LeftSidebar = () => {
  const user = null;
  return (
    <nav
      aria-label="sidebar"
      className="w-full h-screen overflow-y-auto overflow-x-hidden bg-white p-3 flex flex-col items-start justify-start"
    >
      {user ? (
        "Loggin"
      ) : (
        <Link
          href={`/profile/42`}
          className="flex items-center justify-start w-full gap-2 hover:bg-bodybg py-2 px-2 rounded transition-all"
        >
          <Image
            src="/img/avatar.png"
            alt="user_profile"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-base font-semibold text-black tracking-tight">Efe Starboy</span>
        </Link>
      )}


    </nav>
  );
};

export default LeftSidebar;
