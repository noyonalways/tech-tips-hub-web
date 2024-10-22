"use client";

import { protectedRoutes } from "@/constant";
import { useUser } from "@/context/user.provider";
import { logOutUser } from "@/services/auth";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface IProps {}

const NavarDropdown: React.FC<IProps> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsLoading: setUserLoading, user } = useUser();

  const handleLogoutUser = () => {
    logOutUser();
    setUserLoading(true);

    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
      return;
    }
  };

  const adminLinks = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
    },
  ];
  const userLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "My Subscriptions",
      href: "/my-subscriptions",
    },
  ];

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        {user?.profilePicture ? (
          <Avatar
            color="primary"
            size="sm"
            isBordered
            as="button"
            className="transition-transform object-cover"
            src={user.profilePicture}
          />
        ) : (
          <Avatar
            color="primary"
            name={user?.name}
            size="sm"
            isBordered
            as="button"
            className="transition-transform"
          />
        )}
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="user-email" className="h-14 gap-2">
          <p className="font-semibold">Signed in as</p>
          <p className="font-semibold">{user?.email}</p>
        </DropdownItem>
        <DropdownItem key="profile">
          <NextLink
            className="w-full block"
            href={`/profile/@${user?.username}`}
          >
            My Profile
          </NextLink>
        </DropdownItem>

        <>
          {(user &&
            user?.role === "Admin" &&
            adminLinks.map((link) => (
              <DropdownItem key={link.href}>
                <NextLink className="w-full block" href={link.href}>
                  {link.label}
                </NextLink>
              </DropdownItem>
            ))) ||
            (user?.role === "User" &&
              userLinks.map((link) => (
                <DropdownItem key={link.href}>
                  <NextLink className="w-full block" href={link.href}>
                    {link.label}
                  </NextLink>
                </DropdownItem>
              )))}
        </>

        <DropdownItem key="logout" color="danger" onClick={handleLogoutUser}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavarDropdown;
