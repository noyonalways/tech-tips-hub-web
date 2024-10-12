"use server";

import envConfig from "@/config/env.config";

export const getAllPosts = async () => {
  try {
    const res = await fetch(`${envConfig.baseApi}/posts`, {
      next: {
        tags: ["posts"],
      },
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
