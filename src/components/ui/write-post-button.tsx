"use client";

import { useUser } from "@/context/user.provider";
import { Button } from "@nextui-org/button";
import { GoPencil } from "react-icons/go";

interface IProps {}

const WritePostButton: React.FC<IProps> = () => {
  const { user } = useUser();
  return (
    <>
      {user && (
        <Button
          isIconOnly
          size="sm"
          radius="full"
          variant="solid"
          color="primary"
        >
          <GoPencil className="text-lg" />
        </Button>
      )}
    </>
  );
};

export default WritePostButton;
