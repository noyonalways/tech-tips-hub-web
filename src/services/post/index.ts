"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getAllPosts = async () => {
  try {
    const res = await axiosInstance.get("/posts");

    return res?.data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
