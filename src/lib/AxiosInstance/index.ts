import envConfig from "@/config/env.config";
import { getNewAccessToken } from "@/services/auth";
import axios from "axios";
import { cookies } from "next/headers";
import { CgController } from "react-icons/cg";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
  withCredentials: true
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent

    const cookieStore = cookies();
    const accessToken = cookieStore.get("tth_access_token")?.value;
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    
    if (error?.response?.data?.statusCode === 401 && error?.response?.data?.message === "TokenExpiredError"){
      const config = error.config;
      
      console.log("sending refresh token...");
      const res = await getNewAccessToken()
      const accessToken = res?.data?.accessToken
      config.headers["Authorization"] = `Bearer ${accessToken}`;

      cookies().set("tth_access_token", accessToken, {
        secure: envConfig.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 60 * 365,
      });

      return axiosInstance(config)
    }


    return Promise.reject(error);
  }
);

export default axiosInstance;
