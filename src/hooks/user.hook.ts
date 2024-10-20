import {
  blockUser,
  followUser,
  getAllUsers,
  unblockUser,
  unfollowUser,
} from "@/services/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

// follow a user
export const useFollowUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["FOLLOW_USER"],
    mutationFn: async (payload) => await followUser(payload),
    onSuccess: () => {
      toast.success("User following successfully", {
        id: "user-following",
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!", {
        id: "user-following-error",
      });
    },
  });
};

// unfollow a user
export const useUnfollowUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["UNFOLLOW_USER"],
    mutationFn: async (payload) => await unfollowUser(payload),
    onSuccess: () => {
      toast.success("User Unfollowing successfully", {
        id: "user-unfollowing",
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!", {
        id: "user-unfollowing-error",
      });
    },
  });
};

// get all users
export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ["GET_ALL_USERS"],
    queryFn: async () => await getAllUsers(),
  });
};

// block user
export const useBlockUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["BLOCK_USER"],
    mutationFn: async (payload) => await blockUser(payload),
    onSuccess: () => {
      toast.success("User blocked successfully", {
        id: "user-blocked",
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!", {
        id: "user-blocked-error",
      });
    },
  });
};

// unblock user
export const useUnblockUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["UNBLOCK_USER"],
    mutationFn: async (payload) => await unblockUser(payload),
    onSuccess: () => {
      toast.success("User unblocked successfully", {
        id: "user-unblocked",
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!", {
        id: "user-unblocked-error",
      });
    },
  });
};
