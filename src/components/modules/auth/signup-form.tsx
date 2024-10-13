"use client";

import THDatePicker from "@/components/form/th-date-picker";
import THForm from "@/components/form/th-from";
import THInput from "@/components/form/th-input";
import THSelect from "@/components/form/th-select";
import Loading from "@/components/loading";
import { useUserRegister } from "@/hooks/auth.hook";
import { signUpValidationSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

const options = [
  {
    key: "Male",
    label: "Male",
  },
  {
    key: "Female",
    label: "Female",
  },
  {
    key: "Other",
    label: "Other",
  },
];

interface IProps {}

const SignUpForm: React.FC<IProps> = () => {
  const [isPassword, setIsPassword] = useState(true);
  const router = useRouter();
  const { mutate: registerUser, isPending, isSuccess } = useUserRegister();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    const registerData = {
      fullName: data.fullName,
      username: data.username,
      email: data.email,
      password: data.password,
      gender: data.gender,
      dateOfBirth: data.dateOfBirth,
    };

    formData.append("data", JSON.stringify(registerData));

    if (data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    registerUser(formData);
  };

  if (!isPending && isSuccess) {
    router.push("/login");
  }

  return (
    <>
      {isPending && <Loading />}
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
          <THSelect
            label="Select Gender"
            radius="sm"
            size="md"
            variant="flat"
            name="gender"
            options={options}
          />
          <THDatePicker name="dateOfBirth" label="Date of Birth" />
          {/* <THInput
            label="Date of Birth"
            radius="sm"
            name="dateOfBirth"
            placeholder="Date of Birth"
            type="date"
          /> */}
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
