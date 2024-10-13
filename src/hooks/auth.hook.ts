import { loginUser, registerUser } from "@/services/auth";
import { TLogin } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUserRegister = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (payload) => await registerUser(payload),
    onSuccess: () => {
      toast.success("User Register successfully!", {
        id: "user-register",
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!", {
        id: "user-register-error",
      });
    },
  });
};

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
