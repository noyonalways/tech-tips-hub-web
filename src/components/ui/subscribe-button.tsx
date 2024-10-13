"use client";
import { useSubscribePremiumMonthly } from "@/hooks/subscripiton.hook";
import { getProfileInfo } from "@/services/auth";
import { IUser } from "@/types";
import { Button, ButtonProps } from "@nextui-org/button";
import { ReactNode, useEffect, useState } from "react";
import Loading from "../loading";

interface IProps extends ButtonProps {
  children: ReactNode;
}

const SubscribeButton = ({ children, ...props }: IProps) => {
  const [isPremium, setIsPremium] = useState(false);

  const getUser = async () => {
    const profileData = await getProfileInfo();
    const user = (profileData.data as IUser) ?? {};
    setIsPremium(user?.isPremiumUser);
  };

  useEffect(() => {
    getUser()
  }, []);

  const {
    mutate: subscribe,
    isPending,
    data,
    isSuccess,
  } = useSubscribePremiumMonthly();

  const handleSubscribe = () => {
    subscribe({
      price: 20,
      currency: "USD",
      type: "Monthly",
      paymentMethod: "Aamarpay",
    });
  };

  if (!isPending && isSuccess) {
    if (data.success) {
      window.location.href = data.data.payment_url;
    }
  }

  return (
    <>
      {isPending && <Loading />}
      <Button isDisabled={isPremium} onClick={handleSubscribe} {...props}>
        {children}
      </Button>
    </>
  );
};

export default SubscribeButton;
