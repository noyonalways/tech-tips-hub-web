"use server";

import envConfig from "@/config/env.config";

export const getAllCategories = async () => {
  try {
    const res = await fetch(`${envConfig.baseApi}/categories`, {
      next: {
        tags: ["categories"],
      },
    });

    return res.json();
  } catch (err: any) {
    return err?.response?.data;
  }
};
