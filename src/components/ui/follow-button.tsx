"use client";

import { useUser } from "@/context/user.provider";
import { useFollowUser } from "@/hooks/user.hook";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { GoPlus } from "react-icons/go";

interface IProps {
  id: string;
}

const FollowButton: React.FC<IProps> = ({ id }) => {
  const { user: loggedInUser } = useUser();
  const router = useRouter();
  const {mutate: followUser, isPending} = useFollowUser()

  const handleFollow = () => {
    if (!loggedInUser) {
      router.push("/login");
      return;
    }
    // follow the user
    console.log("following... user");
    followUser(id);
  };

  return (
    <>
      <Button
        isLoading={isPending}
        onClick={handleFollow}
        isDisabled={loggedInUser?._id === id}
        size="sm"
        radius="full"
        variant="solid"
        color="primary"
        startContent={!isPending && <GoPlus className="text-lg" />}
      >
        Follow
      </Button>
    </>
  );
};

export default FollowButton;
