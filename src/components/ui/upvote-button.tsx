"use client";

import { useUser } from "@/context/user.provider";
import { useVoteOnPost } from "@/hooks/post.hook";
import { Button, ButtonProps } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface IProps extends ButtonProps {
  children: ReactNode;
  postId: string;
}

const UpVoteButton = ({ children, postId, ...props }: IProps) => {
  const router = useRouter();
  const { user } = useUser();
  const { mutate: upVote, isPending } = useVoteOnPost();

  const handleUpvote = () => {
    if (!user) {
      // Redirect to login page if user is not logged in
      router.push("/login");
      return;
    }

    upVote({ postId: postId, voteType: "upvote" });
  };

  return (
    <Button
      isLoading={isPending}
      onClick={handleUpvote}
      {...props}
    >
      {children}
    </Button>
  );
};

export default UpVoteButton;
