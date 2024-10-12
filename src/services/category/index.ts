"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getAllCategories = async () => {
  try {
    const res = await axiosInstance.get("/categories");

    return res?.data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
