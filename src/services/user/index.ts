"use server";

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

// get user by username
export const getUserByUsername = async (username: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/users/${username}`, {
      next: {
        tags: ["singleUser"],
      },
    });

    return await res?.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

// get user following status
export const getUserFollowingStatus = async (userId: string) => {
  try {
    const res = await axiosInstance.get(`/users/${userId}/follow-status`);

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// follow a user
export const followUser = async (userId: string) => {
  try {
    const res = await axiosInstance.put(`/users/${userId}/follow`);

    revalidateTag("singleUser");

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// unfollow a user
export const unfollowUser = async (userId: string) => {
  try {
    const res = await axiosInstance.delete(`/users/${userId}/unfollow`);

    revalidateTag("singleUser");

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// get all followers by user id
export const getFollowersByUserId = async (userId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/users/${userId}/followers`, {
      cache: "no-store"
    });

    return await res?.json();
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

// get all following by user id
export const getFollowingByUserId = async (userId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/users/${userId}/following`, {
      cache: "no-store",
    });

    return await res?.json();
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

// get all users (admin only)
export const getAllUsers = async () => {
  try {
    const res = await axiosInstance.get("/users");

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// block a user by user id
export const blockUser = async (userId: string) => {
  try {
    const res = await axiosInstance.patch(`/users/${userId}/block`);

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// unblock a user by user id
export const unblockUser = async (userId: string) => {
  try {
    const res = await axiosInstance.patch(`/users/${userId}/unblock`);

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
