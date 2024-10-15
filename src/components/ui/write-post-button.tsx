"use client";

import { useUser } from "@/context/user.provider";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import { NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import { GoPencil } from "react-icons/go";
import { BlogIcon } from "../icons";

interface IProps {}

const WritePostButton: React.FC<IProps> = () => {
  const { user } = useUser();
  return (
    <NavbarItem className={`${user ? "inline" : "hidden"}`}>
      {user && (
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              isIconOnly
              size="sm"
              radius="full"
              variant="solid"
              color="primary"
            >
              <GoPencil className="text-lg" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem
              key="settings"
              startContent={
                <BlogIcon />
              }
            >
              <Link className="w-full block"  href="/blogs/write-blog">New Blog</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </NavbarItem>
  );
};

export default WritePostButton;
;