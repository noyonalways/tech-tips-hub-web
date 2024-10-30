"use client";

import THForm from "@/components/form/th-from";
import THTextarea from "@/components/form/th-textarea";
import { useUser } from "@/context/user.provider";
import { useCommentOnPost } from "@/hooks/post.hook";
import { commentValidationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface IProps {
  postId: string;
}

const CommentForm = ({ postId }: IProps) => {
  const router = useRouter();
  const { user } = useUser();
  const { mutate: commentOnPost, isPending } = useCommentOnPost();

  const onSubmit: SubmitHandler<FieldValues> = (values) => {
    if (!user) {
      router.push("/login");
      return;
    }

    const formData = new FormData();
    formData.append("data", JSON.stringify(values));
    commentOnPost({ postId: postId, payload: formData });
  };

  return (
    <THForm onSubmit={onSubmit} resolver={zodResolver(commentValidationSchema)}>
      <div className="space-y-4">
        <THTextarea
          name="content"
          placeholder="Write comment here..."
          size="lg"
          radius="sm"
          variant="bordered"
        />
        <div className="flex justify-end">
          <Button
            isLoading={isPending}
            type="submit"
            variant="solid"
            radius="sm"
            color="primary"
          >
            Comment
          </Button>
        </div>
      </div>
    </THForm>
  );
};

export default CommentForm;
