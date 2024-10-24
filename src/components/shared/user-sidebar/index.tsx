"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { useState } from "react";
import { HiBars3, HiOutlineArrowLeft, HiOutlineUserCircle, HiXMark } from "react-icons/hi2";
import { MdOutlineArticle } from "react-icons/md";

interface IProps {}

const UserSidebar = ({}: IProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative basis-full lg:basis-[16%]`}>
      <Button
        className="absolute left-0 top-4 px-2"
        variant="light"
        radius="sm"
        onClick={() => setOpen(!open)}
        startContent={<HiBars3 size={18} />}
      >
        User Settings
      </Button>
      {open && (
        <Button
          className="absolute right-2 top-4"
          variant="flat"
          radius="sm"
          onClick={() => setOpen(!open)}
          startContent={<HiXMark size={18} />}
          isIconOnly
        ></Button>
      )}
      <aside
        className={`border-r border-default/50 lg:sticky lg:top-20 absolute bg-background w-[80%] lg:w-auto duration-200 ${
          open ? "left-0" : "-left-96"
        }`}
      >
        <div className="flex flex-col h-[calc(100vh-68px)] pt-2 w-full">
          <div className="space-y-2 w-full flex-1">
            <h2 className="font-semibold px-4">User Settings</h2>
            <ul className="px-4 flex flex-col w-full space-y-2">
              <li>
                <Button
                  className="w-full justify-start"
                  startContent={<HiOutlineUserCircle size={18} />}
                  radius="sm"
                  variant="flat"
                  as={Link}
                  href="/settings"
                >
                  Profile
                </Button>
              </li>
              <li>
                <Button
                  className="w-full justify-start"
                  startContent={<MdOutlineArticle size={18} />}
                  radius="sm"
                  variant="flat"
                  as={Link}
                  href="/settings/manage-blogs"
                >
                  Manage Blogs
                </Button>
              </li>
            </ul>
          </div>

          <div className="p-4 border-t border-default/50 ">
            <Button
              className="w-full justify-start"
              startContent={<HiOutlineArrowLeft size={18} />}
              radius="sm"
              variant="light"
              as={Link}
              href="/"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default UserSidebar;
