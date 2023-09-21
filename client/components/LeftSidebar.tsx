import { sideBarLink } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Footer } from ".";

const LeftSidebar = () => {
  const user = null;
  return (
    <nav
      aria-label="sidebar"
      className="w-full h-screen overflow-y-auto overflow-x-hidden bg-white p-3 flex flex-col items-start justify-start pb-20"
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
          <span className="text-base font-semibold text-black tracking-tight">
            Efe Starboy
          </span>
        </Link>
      )}

      <ul className="flex flex-col items-start w-full justify-start gap-1 pl-2 border-b">
        {sideBarLink.map((item, i) => (
          <li key={i} className="w-full">
            <Link
              href={item.href}
              className="flex items-center justify-start w-full gap-2 hover:bg-bodybg py-2 px-2 rounded transition-all"
            >
              <Image
                src={item.imgUrl}
                alt={`${item.text}_icon`}
                width={18}
                height={20}
              />
              <span className="text-base font-semibold text-black tracking-tight">
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-start w-full justify-start gap-3 pt-3">
        <h4 className="text-lg font-semibold text-basegray tracking-tight">
          Your shortcuts
        </h4>
        <ul className="flex flex-col items-start w-full justify-start gap-1">
          {[0, 1, 2, 3].map((item, i) => (
            <li key={i} className="w-full">
              <Link
                href="/home"
                className="flex items-center justify-start w-full gap-2 hover:bg-bodybg py-2 px-2 rounded transition-all"
              >
                <Image
                  src="/img/shortcut_image.png"
                  alt="shortcuts-images"
                  width={30}
                  height={30}
                  className="rounded"
                />
                <span className="text-sm font-semibold text-black tracking-tight">
                  UI / UX Designers & Developers
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </nav>
  );
};

export default LeftSidebar;
