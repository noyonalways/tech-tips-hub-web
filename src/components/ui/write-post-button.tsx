"use client";

import { useUser } from "@/context/user.provider";
import { WriteBlogModal } from "../modals";

interface IProps {}

const WritePostButton: React.FC<IProps> = () => {
  const { user } = useUser();
  return (
    <>
      {user && <WriteBlogModal />}
    </>
  );
};

export default WritePostButton;
;