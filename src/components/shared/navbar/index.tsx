import { SearchIcon } from "@/components/icons";
import LoginLogoutSwitch from "@/components/ui/login-logout-switch";
import { ThemeSwitch } from "@/components/ui/theme-switch";
import WritePostButton from "@/components/ui/write-post-button";
import { siteConfig } from "@/config/site";
import { Image } from "@nextui-org/image";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import NextLink from "next/link";

export const Navbar = () => {
  const searchInput = (
    <Input
      radius="full"
      variant="bordered"
      aria-label="Search"
      classNames={{
        input: "text-sm ",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      className="border border-default/50 z-50"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink href="/">
            <Image className="size-10" src="/tech-tips-hub-logo.png" alt="tech-tips-hub-logo" />
          </NextLink>
          <div className="size-10 flex justify-center lg:hidden">
            <NavbarMenuToggle />
          </div>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-10 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch className="hidden lg:inline-block" />
        </NavbarItem>

        <WritePostButton />

        <LoginLogoutSwitch />
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <>
          <WritePostButton />
        </>
        <LoginLogoutSwitch />
      </NavbarContent>

      <NavbarMenu className="z-50">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink  className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )} href={item.href}>{item.label}</NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
