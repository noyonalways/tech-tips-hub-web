import { createPost } from "@/services/post";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (payload) => await createPost(payload),
    onSuccess: () => {
      toast.success("Post created successfully", {
        id: "post-created",
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!", {
        id: "post-creation-error",
      });
    },
  });
};
