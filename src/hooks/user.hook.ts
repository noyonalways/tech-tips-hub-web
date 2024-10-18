import { followUser, unfollowUser } from "@/services/user";
import { useMutation } from "@tanstack/react-query";
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
