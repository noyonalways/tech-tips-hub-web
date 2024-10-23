import { createPost, voteOnPost } from "@/services/post";
import { useMutation, useQuery } from "@tanstack/react-query";
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
      toast.success(data?.message, {
        id: "vote-on-post",
      });
    },
    onError: (error) => {
      if (error instanceof Error) {
        console.log("Error message:", error.message);

        // Show the error message in a toast
        toast.error(error.message || "Something went wrong!", {
          id: "vote-on-post-error",
        });
      } else {
        // Generic fallback for other error types (if any)
        toast.error("An unexpected error occurred.", {
          id: "vote-on-post-error",
        });
      }
    },
  });
};
