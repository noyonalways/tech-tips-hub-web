"use server";

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";


export const getUserByUsername = async (username: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/users/${username}`, {
      next: {
        tags: ["singleUser"],
      }
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

    revalidateTag("singleUser")

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// unfollow a user
export const unfollowUser = async (userId: string) => {
  try {
    const res = await axiosInstance.delete(`/users/${userId}/unfollow`);

    revalidateTag("singleUser")

    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// get all followers by user id
export const getFollowersByUserId = async (userId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/users/${userId}/followers`);

    return await res?.json();
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

// get all following by user id

export const getFollowingByUserId = async (userId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/users/${userId}/following`);

    return await res?.json();
  } catch (error: any) {
    throw new Error(error?.message);
  }
};