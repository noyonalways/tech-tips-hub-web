import { ReactNode } from "react";
import { HiOutlineCreditCard, HiOutlineHome } from "react-icons/hi2";
import { MdOutlineArticle, MdOutlineDashboard } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { TbUserStar } from "react-icons/tb";

interface ILink {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
}

export const adminLinks: ILink[] = [
  {
    id: "11",
    label: "Home",
    href: "/",
    icon: <HiOutlineHome size={18} />,
  },
  {
    id: "12",
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: <MdOutlineDashboard size={18} />,
  },
  {
    id: "13",
    label: "Manage Blogs",
    href: "/admin/manage-blogs",
    icon: <MdOutlineArticle size={18} />,
  },
  {
    id: "14",
    label: "Manage Users",
    href: "/admin/manage-users",
    icon: <PiUsers size={18} />,
  },
  {
    id: "15",
    label: "Subscribers",
    href: "/admin/subscribers",
    icon: <TbUserStar size={18} />,
  },
  {
    id: "16",
    label: "Payments",
    href: "/admin/payments",
    icon: <HiOutlineCreditCard size={18} />,
  },
];
