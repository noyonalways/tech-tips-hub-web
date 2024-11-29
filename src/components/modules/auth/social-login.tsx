"use client"

import { Button } from "@nextui-org/button";
import { signIn } from "next-auth/react";

interface IProps {}

const SocialLogin = ({}: IProps) => {
  return (
    <div className="flex justify-center mb-4 space-x-2">
      <Button
        onClick={() => {
          signIn("google", {
            callbackUrl: "/",
          });
        }}
      >
        <h4>Continue With Google</h4>
      </Button>
      <Button
        onClick={() => {
          signIn("facebook", {
            callbackUrl: "/",
          });
        }}
      >
        <h4>Continue With Facebook</h4>
      </Button>
    </div>
  );
};

export default SocialLogin;
