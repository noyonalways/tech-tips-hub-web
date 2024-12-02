"use server"

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/AxiosInstance";

export const getPaymentInfoByTransactionId = async (transactionId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/payments/${transactionId}`, {
      cache: "no-cache"
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};


// get all payments
export const getAllPayments = async () => {
  try {
    const res = await axiosInstance.get("/payments?limit=20")

    return res.data;
  } catch (err: any) {
    throw new Error(err);
  }
}