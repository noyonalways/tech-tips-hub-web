"use client";

import { useUser } from "@/context/user.provider";
import { useSubscribePremiumMonthly } from "@/hooks/subscription.hook";
import { getProfileInfo } from "@/services/auth";
import { IUser } from "@/types";
import { Button, ButtonProps } from "@nextui-org/button";
import { ReactNode, useEffect, useState } from "react";
import Loading from "../loading";
import { AuthenticationModal } from "../modals";

interface IProps extends ButtonProps {
  children: ReactNode;
}

const SubscribeButton = ({ children, ...props }: IProps) => {
  const [isPremium, setIsPremium] = useState(false);
  const { user } = useUser();

  const getUser = async () => {
    const profileData = await getProfileInfo();
    const currentUser = (profileData.data as IUser) ?? {};
    setIsPremium(currentUser?.isPremiumUser);
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
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
      {user ? (
        <Button isDisabled={isPremium} onClick={handleSubscribe} {...props}>
          {children}
        </Button>
      ) : (
        <AuthenticationModal
          redirect="subscriptions"
          buttonContent={children}
          {...props}
        />
      )}
    </>
  );
};

export default SubscribeButton;
