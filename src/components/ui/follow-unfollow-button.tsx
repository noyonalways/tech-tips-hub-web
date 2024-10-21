"use client";

import { useUser } from "@/context/user.provider";
import { useFollowUser, useUnfollowUser } from "@/hooks/user.hook";
import { getUserFollowingStatus } from "@/services/user";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";

interface IProps {
  id: string;
}

const FollowUnFollowButton: React.FC<IProps> = ({ id }) => {
  const router = useRouter();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user: loggedInUser } = useUser();
  const { mutate: followUser, isPending: isFollowPending } = useFollowUser();
  const { mutate: unFollowUser, isPending: isUnFollowPending } =
    useUnfollowUser();

  const handleGetUserFollowingStatus = async () => {
    setIsLoading(true);
    if (!loggedInUser) {
      setIsFollowing(false); // No user, not following
      setIsLoading(false);
      return;
    }

    if (loggedInUser.role === "Admin") {
      setIsFollowing(false);
      setIsLoading(false);
      return;
    }

    const response = await getUserFollowingStatus(id);
    if (response?.data?.isFollowing) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetUserFollowingStatus(); // Call when user changes or after follow/unfollow
  }, [loggedInUser, isFollowPending, isUnFollowPending]);

  const handleFollow = () => {
    if (!loggedInUser) {
      router.push(`/login?redirect=${window.location.pathname}`);
      return;
    }
    followUser(id);
  };

  const handleUnFollow = () => {
    if (!loggedInUser) {
      router.push("/login");
      return;
    }
    unFollowUser(id);
  };

  return (
    <>
      {isLoading ? (
        <Button
          size="sm"
          radius="full"
          variant="solid"
          color="primary"
          isLoading={isLoading}
        ></Button>
      ) : (
        <>
          {isFollowing ? (
            <Button
              onClick={handleUnFollow}
              isDisabled={loggedInUser?._id === id}
              size="sm"
              radius="full"
              variant="solid"
              color="primary"
              startContent={<HiMinus className="text-lg" />}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              onClick={handleFollow}
              isDisabled={
                loggedInUser?._id === id || loggedInUser?.role === "Admin"
              }
              size="sm"
              radius="full"
              variant="solid"
              color="primary"
              startContent={<GoPlus className="text-lg" />}
            >
              Follow
            </Button>
          )}
        </>
      )}
    </>
  );
};

export default FollowUnFollowButton;
