"use client";

import GenderDropdown from "@/components/form/gender-dropdown";
import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import { signUpValidationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface IProps {}

const SignUpForm: React.FC<IProps> = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <>
      <THForm
        onSubmit={onSubmit}
        resolver={zodResolver(signUpValidationSchema)}
      >
        <div className="space-y-2">
          <THInput radius="sm" name="fullName" placeholder="Full Name" />
          <THInput radius="sm" name="email" placeholder="Email Address" />
          <THInput radius="sm" name="username" placeholder="Username" />
          <THInput radius="sm" name="password" placeholder="Password" />
          <GenderDropdown name="gender" />
          <THInput
            label="Date of Birth"
            radius="sm"
            name="dateOfBirth"
            placeholder="Date of Birth"
            type="date"
          />
          <Button
            type="submit"
            color="primary"
            variant="solid"
            radius="sm"
            className="w-full"
          >
            Sign Up
          </Button>
        </div>
      </THForm>
    </>
  );
};

export default SignUpForm;
