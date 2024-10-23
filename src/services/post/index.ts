"use server";

import envConfig from "@/config/env.config";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${envConfig.baseApi}/posts?limit=20`, {
      cache: "no-store",
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
  try {
    const res = await axiosInstance.get(`/posts/following-users`);

    return res.data;
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
      next: {
        tags: ["singlePost"],
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    revalidateTag("posts");

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
    if (err.response && err.response.data) {
      throw new Error(
        err.response.data?.message || "An error occurred during login."
      );
    }

    throw new Error(err.message || "An unexpected error occurred.");
  }
};

// // get vote status
// export const getPostVoteStatus = async (postId: string) => {
//   try {
//     const res = await axiosInstance.get(`/posts/${postId}/vote-status`);

//     return res.data;
//   } catch (err: any) {
//     if (err.response && err.response.data) {
//       throw new Error(
//         err.response.data?.message || "An error occurred during login."
//       );
//     }

//     throw new Error(err.message || "An unexpected error occurred.");
//   }
// };
