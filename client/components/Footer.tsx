import { footerList } from "@/data";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <footer className="block mt-4">
      <ul className="flex flex-wrap gap-3">
        {footerList.map((item) => (
          <li
            key={item}
            className="text-basegray text-sm font-normal hover:underline cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
      <p className="text-basegray text-sm font-normal">{year} ConnectSmart</p>
    </footer>
  );
};

export default Footer;
