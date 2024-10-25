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
import { Suspense, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { toast } from "sonner";

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

  if (!isPending && data?.success) {
    setUserLoading(false);
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
          <div className="relative">
            <THInput
              radius="sm"
              name="password"
              placeholder="Password"
              type={isPassword ? "password" : "text"}
            />
            <button
              onClick={() => setIsPassword(!isPassword)}
              type="button"
              className="absolute top-3 right-2 text-lg"
            >
              {isPassword ? <PiEyeLight /> : <PiEyeSlashLight />}
            </button>
          </div>

          <Button
            type="submit"
            color="primary"
            variant="solid"
            radius="sm"
            className="w-full block"
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
