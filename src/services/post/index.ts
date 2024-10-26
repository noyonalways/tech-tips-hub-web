"use server";

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { AiFillAccountBook } from "react-icons/ai";

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${envConfig.baseApi}/posts?limit=20`, {
      cache: "no-cache",
      next: {
        tags: ["posts"],
      },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};

// get following users posts
export const getFollowingUsersPosts = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("tth-access-token")?.value;
  try {
    const res = await fetch(`${envConfig.baseApi}/posts/following-users`, {
      cache: "no-cache",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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

    return res?.data;
  } catch (err: any) {
    return err?.response?.data
    
  }
};

export const getPostBySlug = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/posts/${slug}`);

    return res.data;
  } catch (err: any) {
    return err.response.data;
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

// upvote/downvote by post id
export const voteOnPost = async (
  postId: string,
  voteType: "upvote" | "downvote"
) => {
  try {
    const res = await axiosInstance.put(
      `/posts/${postId}/vote?voteType=${voteType}`
    );

    revalidateTag("singlePost");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

// get logged in user blogs
export const getLoggedInUserBlogs = async () => {
  try {
    const res = await axiosInstance.get(`/posts/my-posts`);

    return res?.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};
