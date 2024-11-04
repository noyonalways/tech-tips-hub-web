"use server"

import axiosInstance from "@/lib/AxiosInstance";


export type TSubscriptionPayload = {
    type: "Monthly",
    price: number,
    currency: "USD",
    paymentMethod: "Aamarpay"
}

export const subscribePremiumMonthly = async (payload: TSubscriptionPayload) => {
  try {
    const res = await axiosInstance.post("/subscriptions/subscribe", payload);

    return res?.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};


// get all subscriptions
export const getAllSubscriptions = async () => {
  try {
    const res = await axiosInstance.get("/subscriptions")

    return res.data;
  } catch (err: any) {
    throw new Error(err);
  }
}