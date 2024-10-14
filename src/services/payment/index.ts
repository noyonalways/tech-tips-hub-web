import envConfig from "@/config/env.config";

export const getPaymentInfoByTransactionId = async (transactionId: string) => {
  try {
    const res = await fetch(`${envConfig.baseApi}/payments/${transactionId}`, {
      cache: "no-cache"
    });

    return res.json();
  } catch (err: any) {
    throw new Error(err);
  }
};
