"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { TLogin } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

// register a new user
export const registerUser = async (payload: FormData) => {
  try {
    const res = await axiosInstance.post("/auth/register", payload);

    return res.data;
  } catch (err: any) {
    // console.log(err?.data);
    throw new Error(err.message);
  }
};

// login existing user
export const loginUser = async (payload: TLogin) => {
  try {
    const res = await axiosInstance.post("/auth/login", payload);

    if (res?.data.success) {
      cookies().set("tth-access-token", res?.data?.data?.accessToken);
      cookies().set("tth-refresh-token", res?.data?.data?.refreshToken);
    }

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// logout user
export const logOutUser = () => {
  cookies().delete("tth-access-token");
  cookies().delete("tth-refresh-token");
};

// get current logged in user details
export const getCurrentUser = async () => {
  const accessToken = cookies().get("tth-access-token")?.value;
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
  }

  return decodedToken;
};

// get user profile info
export const getProfileInfo = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");

    return res?.data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

// forget password
export const forgetPassword = async (payload: { email: string }) => {
  try {
    const res = await axiosInstance.post("/auth/forget-password", payload);

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
