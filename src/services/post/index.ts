"use server";

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllPosts = async (
  params?: Record<string, string | undefined>
) => {
  try {
    const url = new URL(`${envConfig.baseApi}/posts`);

    // Append only defined parameters
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== undefined) {
          url.searchParams.append(key, value);
        }
      });
    }

    const res = await fetch(url.toString(), {
      cache: "no-cache",
      next: {
        tags: ["posts"],
      },
    });

    return res.json();
  } catch (err: any) {
    return err;
  }
};



// get following users posts
export const getFollowingUsersPosts = async (
  params?: Record<string, string | undefined>
) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("tth-access-token")?.value;

  try {
    // Create a URL with the base endpoint
    const url = new URL(`${envConfig.baseApi}/posts/following-users`);

    // Append only defined parameters
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (value !== undefined) {
          url.searchParams.append(key, value);
        }
      });
    }

    const res = await fetch(url.toString(), {
      cache: "no-cache", // Consistent with getAllPosts
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        tags: ["posts"], // Add this if you want to enable cache invalidation
      },
    });

    return res.json();
  } catch (err: any) {
    return err; // Handle the error as you see fit
  }
};



export const createPost = async (payload: FormData) => {
  try {
    const res = await axiosInstance.post("/posts", payload);

    revalidateTag("posts");

    return res?.data;
  } catch (err: any) {
    return err?.response?.data;
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
    return err;
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

// comment on post
export const commentOnPost = async (postId: string, payload: FormData) => {
  try {
    const res = await axiosInstance.post(`/posts/${postId}/comments`, payload);

    revalidateTag("comments");

    return await res?.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

// get all comments by post id
export const getCommentsByPostId = async (postId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/posts/${postId}/comments`, {
      next: {
        tags: ["comments"],
      },
    });

    return res?.json();
  } catch (err: any) {
    return err?.response?.data;
  }
};

// delete a blog by admin using id with reason
export const deleteBlogByAdminUsingId = async (
  blogId: string,
  reason: string
) => {
  try {
    const res = await axiosInstance.delete(`/posts/${blogId}/by-admin`, {
      data: { reason },
    });

    revalidateTag("posts");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};

// delete a blog by user using id
export const deleteBlogByUserUsingId = async (blogId: string) => {
  try {
    const res = await axiosInstance.delete(`/posts/${blogId}`);

    revalidateTag("posts");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};


// update a blog by user using id
export const updateBlogByUserUsingId = async (blogId: string, payload: FormData) => {
  try {
    const res = await axiosInstance.put(`/posts/${blogId}`, payload);

    revalidateTag("posts");

    return res.data;
  } catch (err: any) {
    return err?.response?.data;
  }
};
