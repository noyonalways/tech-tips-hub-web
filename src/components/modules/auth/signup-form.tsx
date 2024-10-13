"use client";

import GenderDropdown from "@/components/form/gender-dropdown";
import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import { signUpValidationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

interface IProps {}

const SignUpForm: React.FC<IProps> = () => {
  const [isPassword, setIsPassword] = useState(true)
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
          <THInput
            radius="sm"
            name="image"
            label="Profile Image"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
          />
          <THInput radius="sm" name="fullName" placeholder="Full Name" />
          <THInput radius="sm" name="email" placeholder="Email Address" />
          <THInput radius="sm" name="username" placeholder="Username" />
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
