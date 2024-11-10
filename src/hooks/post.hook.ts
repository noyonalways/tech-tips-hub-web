import {
  commentOnPost,
  createPost,
  updateBlogByUserUsingId,
  getAllPosts,
  voteOnPost,
  deleteBlogByUserUsingId,
  updateBlogByAdmin,
} from "@/services/post";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteBlogByAdminUsingId } from "./../services/post/index";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (payload) => await createPost(payload),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.errorSources?.[0]?.message || data?.message , {
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
        toast.error(data?.message, {
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
        toast.error(data?.message, {
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

// get all blogs (for admin only)
export const useGetAllPosts = (params?: Record<string, string>) => {
  return useQuery({
    queryKey: ["GET_ALL_POSTS"],
    queryFn: async () => await getAllPosts(params),
  });
};

// delete a post by admin using id with reason
export const useDeletePostByAdminUsingId = () => {
  return useMutation<any, Error, { postId: string; reason: string }>({
    mutationKey: ["DELETE_POST_BY_ADMIN"],
    mutationFn: async ({ postId, reason }) =>
      await deleteBlogByAdminUsingId(postId, reason),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message, {
          id: "delete-post-by-admin",
        });
      }
      if (data.success) {
        toast.success(data?.message, {
          id: "delete-post-by-admin",
        });
      }
    },
  });
};

export const useDeletePostByUserUsingId = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_POST_BY_USER"],
    mutationFn: async (postId) => await deleteBlogByUserUsingId(postId),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message, {
          id: "delete-post-by-user",
        });
      }
      if (data.success) {
        toast.success(data?.message, {
          id: "delete-post-by-user",
        });
      }
    },
  });
};

export const useUpdatePostByUserUsingId = () => {
  return useMutation<any, Error, { postId: string; payload: FormData }>({
    mutationKey: ["UPDATE_POST_BY_USER"],
    mutationFn: async ({ postId, payload }) =>
      await updateBlogByUserUsingId(postId, payload),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message, {
          id: "update-post-by-user",
        });
      }
      if (data.success) {
        toast.success(data?.message, {
          id: "update-post-by-user",
        });
      }
    },
  });
};


export const useUpdateBlogByAdmin = () => {
  return useMutation<any, Error, { postId: string; payload: FormData }>({
    mutationKey: ["UPDATE_POST_BY_ADMIN"],
    mutationFn: async ({ postId, payload }) =>
      await updateBlogByAdmin(postId, payload),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message, {
          id: "update-post-by-admin",
        });
      }
      if (data.success) {
        toast.success(data?.message, {
          id: "update-post-by-admin",
        });
      }
    },
  });
};
