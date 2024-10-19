import { ThemeSwitch } from "@/components/ui/theme-switch";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from "next/link";
import { HiOutlineCreditCard, HiOutlineHome } from "react-icons/hi2";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUsers } from "react-icons/pi";

interface IProps {}

const AdminSidebar = ({}: IProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <Image
            className="size-10"
            src="/tech-tips-hub-logo.png"
            alt="tech-tips-hub-logo"
          />
          <span className="text-lg font-semibold">Tech Tips Hub</span>
        </Link>
        <ThemeSwitch />
      </div>

      <div className="space-y-2">
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
        <Button
          radius="sm"
          variant="flat"
          className="w-full justify-start"
          as={Link}
          href="/admin/all-payments"
          startContent={<HiOutlineCreditCard size={18} />}
        >
          All Payments
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;