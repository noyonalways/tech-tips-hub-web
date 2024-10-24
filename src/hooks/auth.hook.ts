import { forgetPassword, loginUser, registerUser } from "@/services/auth";
import { TLogin } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
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
      if (error instanceof Error) {
        console.log("Error message:", error.message);

        // Show the error message in a toast
        toast.error(error.message || "Something went wrong!", {
          id: "user-login-error",
        });
      } else {
        // Generic fallback for other error types (if any)
        toast.error("An unexpected error occurred.", {
          id: "user-login-error",
        });
      }
    },
  });
};
;

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
      // Check if it's an instance of the Error object
      if (error instanceof Error) {
        console.log("Error message:", error.message);

        // Show the error message in a toast
        toast.error(error.message || "Something went wrong!", {
          id: "user-login-error",
        });
      } else {
        // Generic fallback for other error types (if any)
        toast.error("An unexpected error occurred.", {
          id: "user-login-error",
        });
      }
    },
  });
};


export const useForgetPassword = () => {
  return useMutation<any, Error, { email: string }>({
    mutationKey: ["FORGOT_PASSWORD"],
    mutationFn: async (payload) => await forgetPassword(payload),
    onSuccess: () => {
      toast.success(
        "Password reset link sent to your email address successfully!",
        {
          id: "password-reset",
        }
      );
    },
    onError: (error) => {
      if (error instanceof Error) {
        console.log("Error message:", error.message);

        // Show the error message in a toast
        toast.error(error.message || "Something went wrong!", {
          id: "user-login-error",
        });
      } else {
        // Generic fallback for other error types (if any)
        toast.error("An unexpected error occurred.", {
          id: "user-login-error",
        });
      }
    },
  });
};
