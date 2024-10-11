"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";

interface IProps {}

const GenderDropdown: React.FC<IProps> = () => {
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <Button radius="full" variant="flat" className="w-full text-start">
          Select Gender
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
      >
        <DropdownItem key="male">Male</DropdownItem>
        <DropdownItem key="female">Female</DropdownItem>
        <DropdownItem key="other">Other</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default GenderDropdown;
