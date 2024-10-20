import { getAllPayments } from "@/services/payment";
import { useQuery } from "@tanstack/react-query";

// get all payments (admin only)
export const useGetAllPayments = () => {
  return useQuery({
    queryKey: ["GET_ALL_PAYMENTS"],
    queryFn: async () => await getAllPayments(),
  });
};
