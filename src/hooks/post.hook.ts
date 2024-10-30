import {
  commentOnPost,
  createPost,
  getCommentsByPostId,
  getPostBySlug,
  voteOnPost,
} from "@/services/post";
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

// comment on post
export const useCommentOnPost = () => {
  return useMutation<any, Error, { postId: string; payload: FormData }>({
    mutationKey: ["COMMENT_ON_POST"],
    mutationFn: async ({ postId, payload }) =>
      await commentOnPost(postId, payload),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.success(data?.message, {
          id: "comment-on-post",
        });
      }
      if (data.success) {
        toast.success(data?.message, {
          id: "comment-on-post",
        });
      }
    },
  });
};

// get comments by post id
// export const useGetCommentsByPostId = (postId: string) => {
//   return useQuery({
//     queryKey: ["GET_ALL_COMMENTS_BY_POST_ID", postId],
//     queryFn: async () => await getCommentsByPostId(postId),
//   });
// };
