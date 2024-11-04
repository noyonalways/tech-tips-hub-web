import { getAllSubscriptions, subscribePremiumMonthly, TSubscriptionPayload } from "@/services/subscription";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSubscribePremiumMonthly = () => {
  return useMutation<any, Error, TSubscriptionPayload>({
    mutationKey: ["SUBSCRIPTION_PLAN"],
    mutationFn: async (payload) => await subscribePremiumMonthly(payload),
    onSuccess: (data) => {
      if (!data?.success) {
        toast.error(data?.message, {
          id: "subscription-monthly",
        });
      }
      if (data.success) {
        toast.success("Subscription initiate successfully", {
          id: "subscription-monthly",
        });
      }
    },
    
  });
};



// get all payments (admin only)
export const useGetAllSubscriptions = () => {
  return useQuery({
    queryKey: ["GET_ALL_SUBSCRIPTIONS"],
    queryFn: async () => await getAllSubscriptions(),
  });
};
