import { footerList } from "@/data";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className="block mt-4">
      <ul className="flex flex-wrap gap-2">
        {footerList.map((item) => (
          <li
            key={item}
            className="text-basegray text-sm font-normal hover:underline cursor-pointer flex items-center group"
          >
            {item} <span className="w-1 inline-block h-1 bg-basegray rounded-full ml-1 group-last:hidden"></span>
          </li>
        ))}
      </ul>
      <p className="text-basegray text-sm font-normal">&copy; {year} SmartConnect</p>
    </footer>
  );
};

export default Footer;
