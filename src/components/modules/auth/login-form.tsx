"use client";

import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import { signInValidationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface IProps {}

const LoginForm: React.FC<IProps> = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <>
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

export default LoginForm;
