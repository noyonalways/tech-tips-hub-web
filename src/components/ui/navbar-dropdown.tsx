"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

interface IProps {}

const NavarDropdown: React.FC<IProps> = () => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <Avatar
          size="sm"
          isBordered
          as="button"
          className="transition-transform"
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1700995925084/zr_JJq4Wl.jpg?w=240&h=240&fit=crop&crop=faces&auto=compress,format&format=webp"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">noyonrahman2003@gmail.com</p>
        </DropdownItem>
        <DropdownItem key="profile" href={`/profile/${"username"}`}>
          My Profile
        </DropdownItem>
        <DropdownItem key="subscription" href="/my-subscription">
          Subscription
        </DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavarDropdown;
