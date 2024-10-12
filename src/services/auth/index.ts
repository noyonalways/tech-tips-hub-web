"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { TLogin } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const loginUser = async (payload: TLogin) => {
  try {
    const res = await axiosInstance.post("/auth/login", payload);

    if (res?.data.success) {
      cookies().set("tth-access-token", res?.data?.data?.accessToken);
      cookies().set("tth-refresh-token", res?.data?.data?.refreshToken);
    }

    return res.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const logOutUser = () => {
  cookies().delete("tth-access-token");
  cookies().delete("tth-refresh-token");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("tth-access-token")?.value;
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
  }

  return decodedToken;
};
