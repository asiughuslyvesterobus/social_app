import { AiFillHome } from "react-icons/ai";
import { PiMonitorPlayFill } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";

export const NavIcons = [
  {
    icon: AiFillHome,
    tooltip: "Home",
    href: "/",
  },
  {
    icon: PiMonitorPlayFill,
    tooltip: "Videos",
    href: "/videos",
  },
  {
    icon: BsShop,
    tooltip: "Marketplace",
    href: "/marketplace",
  },
  {
    icon: HiUserGroup,
    tooltip: "Groups",
    href: "/group",
  },
];

export const sideBarLink = [
  {
    imgUrl: "/icon/friend.png",
    text: "Friends",
    href: "/",
  },
  {
    imgUrl: "/icon/watchIcon.svg",
    text: "Video",
    href: "/",
  },
  {
    imgUrl: "/icon/saved.svg",
    text: "Saved",
    href: "/",
  },
  {
    imgUrl: "/icon/adsIcon.svg",
    text: "Ads",
    href: "/",
  },
  {
    imgUrl: "/icon/messengerIcon.svg",
    text: "Messenger",
    href: "/",
  },
];

export const footerList = [
  "Help",
  "Safety",
  "Terms",
  "Privacy",
  "Creator Portal",
  "Community Guidelines",
];
