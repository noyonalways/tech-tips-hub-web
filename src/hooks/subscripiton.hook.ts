import { subscribePremiumMonthly, TSubscriptionPayload } from "@/services/subscription";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSubscribePremiumMonthly = () => {
  return useMutation<any, Error, TSubscriptionPayload>({
    mutationKey: ["SUBSCRIPTION_PLAN"],
    mutationFn: async (payload) => await subscribePremiumMonthly(payload),
    onSuccess: (data) => {
      toast.success("Subscription initiate successfully", {
        id: "subscription-monthly",
      });
    },
    onError: (error) => {
      toast.error(error?.message || "Something went wrong!", {
        id: "subscription-monthly-error",
      });
    },
  });
};
