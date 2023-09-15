import { footerList } from "@/data";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="block">
      <div className="flex flex-wrap gap-2">
        {footerList.map((item) => (
          <p
            key={item}
            className="text-gray-400 dark:text-gray-200 text-sm hover:underline cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
      <p className="text-gray-400 dark:text-gray-200 text-sm mt-5">
        {year} ConnectSmart
      </p>
    </div>
  );
};

export default Footer;
