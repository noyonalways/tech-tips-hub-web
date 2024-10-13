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
import { Suspense } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface IProps {}

const LoginForm: React.FC<IProps> = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setIsLoading: setUserLoading } = useUser();

  const { mutate: handleLogin, isPending, isSuccess } = useUserLogin();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleLogin(data as TLogin);
    setUserLoading(true);
  };

  const redirect = searchParams.get("redirect");

  if (!isPending && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }

  return (
    <>
      {isPending && <Loading />}
      <THForm
        onSubmit={onSubmit}
        resolver={zodResolver(signInValidationSchema)}
      >
        <div className="space-y-2">
          <THInput radius="sm" name="email" placeholder="Email Address" />
          <THInput radius="sm" name="password" placeholder="Password" />

          <Button
            type="submit"
            color="primary"
            variant="solid"
            radius="sm"
            className="w-full"
          >
            Log In
          </Button>
        </div>
      </THForm>
    </>
  );
};

const SuspendedLoginForm: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <LoginForm />
  </Suspense>
);

export default SuspendedLoginForm;
