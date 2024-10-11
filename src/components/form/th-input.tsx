"use client";

import { Input, InputProps } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps extends InputProps {
  name: string;
}

const THInput: React.FC<IProps> = ({ name, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      {...register(name)}
      {...props}
    />
  );
};

export default THInput;
