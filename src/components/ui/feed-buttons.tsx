"use client";

import { useUser } from "@/context/user.provider";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { PiMagicWandLight, PiUsers } from "react-icons/pi";

interface IProps {}

const FeedButtons = ({}: IProps) => {
  const { user: loggedInUser } = useUser();
  return (
    <>
      <Button
        as={Link}
        href={`/`}
        variant="flat"
        color="primary"
        radius="full"
        startContent={<PiMagicWandLight className="text-lg" />}
      >
        Personalized
      </Button>
      <Button
        isDisabled={!loggedInUser}
        as={Link}
        href={`/following`}
        variant="light"
        radius="full"
        startContent={<PiUsers className="text-lg" />}
      >
        Following
      </Button>
    </>
  );
};

export default FeedButtons;
