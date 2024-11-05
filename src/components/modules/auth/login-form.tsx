"use client";

import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import Loading from "@/components/loading";
import { useUser } from "@/context/user.provider";
import { useUserLogin } from "@/hooks/auth.hook";
import { signInValidationSchema } from "@/schemas";
import { TLogin } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

interface IProps {}

const LoginForm = ({}: IProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPassword, setIsPassword] = useState(true);

  const { setIsLoading: setUserLoading } = useUser();
  const { mutate: handleLogin, isPending, data } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleLogin(data as TLogin);
    setUserLoading(true);
  };

  const redirect = searchParams.get("redirect");

  useEffect(() => {
    if (!isPending && data?.success) {
      setUserLoading(false);
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, data, redirect, router, setUserLoading]);

  return (
    <Suspense>
      <THForm
        onSubmit={onSubmit}
        resolver={zodResolver(signInValidationSchema)}
      >
        <div className="space-y-2">
          <THInput
            label="Email"
            isRequired
            radius="sm"
            name="email"
            placeholder="Email Address"
          />
          <div className="relative">
            <THInput
              label="Password"
              isRequired
              radius="sm"
              name="password"
              placeholder="Your Password"
              type={isPassword ? "password" : "text"}
            />
            <Button
              variant="light"
              size="sm"
              radius="full"
              isIconOnly
              onClick={() => setIsPassword(!isPassword)}
              type="button"
              className="absolute top-3 right-2 text-lg"
            >
              {isPassword ? <PiEyeLight /> : <PiEyeSlashLight />}
            </Button>
          </div>

          <Button
            isLoading={isPending}
            type="submit"
            color="primary"
            variant="solid"
            radius="sm"
            className="w-full block"
          >
            {isPending ? "Logging...": "Login"}
          </Button>
        </div>
      </THForm>
    </Suspense>
  );
};


const SuspendedLoginForm = () => (
  <Suspense fallback={<Loading />}>
    <LoginForm />
  </Suspense>
);

export default SuspendedLoginForm;
