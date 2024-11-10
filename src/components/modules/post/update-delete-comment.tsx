"use client";

import CommentUpdateModal from "@/components/modals/update-comment-modal";
import { useUser } from "@/context/user.provider";
import {
  useDeleteCommentByUser,
  useUpdateCommentByUser,
} from "@/hooks/post.hook";
import { Button } from "@nextui-org/button";
import { MdDelete, MdModeEdit } from "react-icons/md";

interface IProps {
  commentUserEmail: string;
  commentId: string;
  content: string;
}

const UpdateDeleteComment = ({ commentUserEmail, commentId, content }: IProps) => {
  const { user } = useUser();
  const { mutate: deleteComment, isPending } = useDeleteCommentByUser();

  return (
    <>
      {user?.email === commentUserEmail && (
        <div className="absolute top-2 right-2 space-x-2">
          <Button
            isLoading={isPending}
            onClick={() => deleteComment(commentId)}
            variant="light"
            size="sm"
            radius="full"
            isIconOnly
            color="danger"
          >
            <MdDelete size={16} />
          </Button>
          <CommentUpdateModal commentId={commentId} content={content} />
        </div>
      )}
    </>
  );
};

export default UpdateDeleteComment;
