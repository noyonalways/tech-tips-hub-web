"use client";

import { useUser } from "@/context/user.provider";
import { NavbarItem } from "@nextui-org/navbar";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import NavarDropdown from "./navbar-dropdown";

interface IProps {}

const LoginLogoutSwitch: React.FC<IProps> = () => {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <NavbarItem>
          <NavarDropdown />
        </NavbarItem>
      ) : (
        <div>
          <NextLink
            className={buttonStyles({
              radius: "full",
              variant: "light",
            })}
            href={`/login`}
          >
            Log In
          </NextLink>
          <NextLink
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "solid",
            })}
            href={`/signup`}
          >
            Sign Up
          </NextLink>
        </div>
      )}
    </>
  );
};

export default LoginLogoutSwitch;