"use client"

import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { useState } from "react";
import { HiBars2, HiOutlineCreditCard, HiOutlineHome, HiXMark } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUsers } from "react-icons/pi";
import { TbUserStar } from "react-icons/tb";
import { IoShareOutline } from 'react-icons/io5';

interface IProps {}

const AdminSidebar = ({}: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:basis-[20%] border-b lg:border-r border-default/50 lg:h-screen fixed top-0 lg:sticky w-full z-10 bg-background">
      <div className="flex items-center justify-between p-4">
        <Link className="flex items-center space-x-2" href="/">
          <Image
            className="size-10"
            src="/tech-tips-hub-logo.png"
            alt="tech-tips-hub-logo"
          />
          <span className="text-lg font-semibold">Tech Tips Hub</span>
        </Link>
        <div className="flex space-x-4 items-center">
          <ThemeSwitch />
          <Button 
            isIconOnly
            variant="flat"
            className="lg:hidden active:scale-95 transition duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiXMark size={24} /> : <HiBars2 size={24} />}
          </Button>
        </div>
      </div>

      <nav
        className={`lg:block transition-all duration-300 ease-in-out px-2 lg:px-4 py-2 ${
          isMenuOpen ? "right-0" : "right-full"
        } absolute lg:static top-20  w-full bg-background lg:bg-transparent h-screen lg:h-auto`}
      >
        <ul className="space-y-2">
          <li>
            <Button
              radius="sm"
              variant="flat"
              className="w-full justify-start"
              as={Link}
              href="/"
              startContent={<HiOutlineHome size={18} />}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              radius="sm"
              variant="flat"
              className="w-full justify-start"
              as={Link}
              href="/admin/dashboard"
              startContent={<MdOutlineDashboard size={18} />}
            >
              Dashboard
            </Button>
          </li>
          <li>
            <Button
              radius="sm"
              variant="flat"
              className="w-full justify-start"
              as={Link}
              href="/admin/manage-users"
              startContent={<PiUsers size={18} />}
            >
              Manage Users
            </Button>
          </li>
          <li>
            <Button
              radius="sm"
              variant="flat"
              className="w-full justify-start"
              as={Link}
              href="/admin/subscribers"
              startContent={<TbUserStar size={18} />}
            >
              Subscribers
            </Button>
          </li>
          <li>
            <Button
              radius="sm"
              variant="flat"
              className="w-full justify-start"
              as={Link}
              href="/admin/payments"
              startContent={<HiOutlineCreditCard size={18} />}
            >
              Payments
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;