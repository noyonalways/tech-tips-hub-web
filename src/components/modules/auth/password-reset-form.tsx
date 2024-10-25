"use client";

import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import Loading from "@/components/loading";
import { useForgetPassword } from "@/hooks/auth.hook";
import { passwordResetValidationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const PasswordResetForm = () => {
  const router = useRouter();

  const {
    mutate: handleForgetPassword,
    isPending,
    data,
  } = useForgetPassword();

  const onSubmit: SubmitHandler<FieldValues> = (payload) => {
    handleForgetPassword({ email: payload.email });
  };

  if (!isPending && data?.success) {
    router.push("/login");
  }

  return (
    <>
      {isPending && <Loading />}
      <THForm
        onSubmit={onSubmit}
        resolver={zodResolver(passwordResetValidationSchema)}
      >
        <div className="space-y-2 pb-4">
          <THInput radius="sm" name="email" placeholder="Email Address" />

          <Button
            type="submit"
            color="primary"
            variant="solid"
            radius="sm"
            className="w-full"
          >
            Send Email
          </Button>
        </div>
      </THForm>
    </>
  );
};

const SuspendedPasswordResetForm: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <PasswordResetForm />
  </Suspense>
);

export default SuspendedPasswordResetForm;
