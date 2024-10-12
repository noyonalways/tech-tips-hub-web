import { getProfileInfo, loginUser } from "@/services/auth";
import { TLogin } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUserLogin = () => {
  return useMutation<any, Error, TLogin>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (payload) => await loginUser(payload),
    onSuccess: () => {
      toast.success("User logged in successfully!", {
        id: "user-login",
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!", {
        id: "user-login-error",
      });
    },
  });
};

export const useGetProfileInfo = () => {
  return useQuery({
    queryKey: ["GET_PROFILE_INFO"],
    queryFn: async () => await getProfileInfo(),
  });
};
