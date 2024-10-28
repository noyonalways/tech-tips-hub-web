import { createPost, getPostBySlug, voteOnPost } from "@/services/post";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (payload) => await createPost(payload),
    onSuccess: (data) => {
      if (!data?.success) {
        // console.log(data);
        toast.success(data?.message || data?.errorSources?.[0]?.message, {
          id: "create-post",
        });
      }
      if (data.success) {
        toast.success(data?.message, {
          id: "create-post",
        });
      }
    },
    
  });
};

// vote on post
export const useVoteOnPost = () => {
  return useMutation<
    any,
    Error,
    { postId: string; voteType: "upvote" | "downvote" }
  >({
    mutationKey: ["VOTE_ON_POST"],
    mutationFn: async ({ postId, voteType }) =>
      await voteOnPost(postId, voteType),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.success(data?.message, {
          id: "vote-on-post",
        });
      }
      if (data.success) {
        toast.success(data?.message, {
          id: "vote-on-post",
        });
      }
    },
  });
};
