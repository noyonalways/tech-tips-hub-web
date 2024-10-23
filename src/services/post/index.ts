"use server";

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${envConfig.baseApi}/posts?limit=20`, {
      next: {
        tags: ["posts"],
      },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const createPost = async (payload: FormData) => {
  try {
    const res = await axiosInstance.post("/posts", payload);

    revalidateTag("posts");

    return res.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message);
  }
};

export const getPostBySlug = async (slug: string) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("tth-access-token")?.value;
  try {
    const res = await fetch(`${envConfig.baseApi}/posts/${slug}`, {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};


export const getLoggedInUserPosts = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("tth-access-token")?.value;
  try {
    const res = await fetch(`${envConfig.baseApi}/posts/my-posts`, {
      next: {
        tags: ["posts"],
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

export const getPostsByUserId = async (userId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/posts/users/${userId}`, {
      next: {
        tags: ["posts"],
      },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};