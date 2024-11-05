import { MdOutlineArticle } from "react-icons/md";
import { HiOutlineUserCircle} from "react-icons/hi2";
import { ReactNode } from "react";


interface ILink {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
}

export const userLinks: ILink[] = [
  {
    id: "01",
    label: "Profile",
    href: "/settings",
    icon: <HiOutlineUserCircle size={18} />,
  },
  {
    id: "02",
    label: "Manage Blogs",
    href: "/settings/manage-blogs",
    icon: <MdOutlineArticle size={18} />,
  },
];
