"use client";

import { useUser } from "@/context/user.provider";
import { Button } from "@nextui-org/button";
import { GoPlus } from "react-icons/go";

interface IProps {
  id: string;
}

const FollowButton: React.FC<IProps> = ({ id }) => {
  const { user } = useUser();
  return (
    <>
      <Button
        isDisabled={user?._id === id}
        size="sm"
        radius="full"
        variant="solid"
        color="primary"
        startContent={<GoPlus className="text-lg" />}
      >
        Follow
      </Button>
    </>
  );
};

export default FollowButton;
