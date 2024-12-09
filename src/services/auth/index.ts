"use server";

import envConfig from "@/config/env.config";
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
    return err?.response?.data;
  }
};

// login existing user
export const loginUser = async (payload: TLogin) => {
  try {
    const res = await axiosInstance.post("/auth/login", payload);

    if (res?.data.success) {
      cookies().set("tth-access-token", res?.data?.data?.accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 60 * 365,
      });
      cookies().set("tth-refresh-token", res?.data?.data?.refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 60 * 365,
      });
    }

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};


// social login
export const socialLogin = async (payload: {email: string, fullName: string, profilePicture?: string}) => {
  try {
    const res = await axiosInstance.post("/auth/social-login", payload);

    if (res?.data.success) {
      cookies().set("tth-access-token", res?.data?.data?.accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 60 * 365,
      });
      cookies().set("tth-refresh-token", res?.data?.data?.refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 60 * 365,
      });
    }

    return res?.data ;
  } catch (err: any) {
    return err?.response?.data;
  }
}

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
  const cookieStore = cookies();
  const accessToken = cookieStore.get("tth-access-token")?.value;
  try {
    const res = await fetch(`${envConfig.baseApi}/auth/me`, {
      next: {
        tags: ["loggedInUserProfile"],
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res?.json();
  } catch (err: any) {
    return err
  }
};

// forget password
export const forgetPassword = async (payload: { email: string }) => {
  try {
    const res = await axiosInstance.post("/auth/forget-password", payload);

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};
