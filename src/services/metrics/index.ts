"use server"

import axiosInstance from "@/lib/AxiosInstance"

export const getDashboardMetrics = async () => {
  try {
    const res = await axiosInstance.get("/metrics/dashboard");

    return res.data;
  } catch (error: any) {
    return error?.response?.data;
  }
}