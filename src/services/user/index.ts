"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getUserByUsername = async (username: string) => {
  try {
    const res = await axiosInstance.get(`/users/${username}`);

    return res?.data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
