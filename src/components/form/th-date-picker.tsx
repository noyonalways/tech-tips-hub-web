import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

interface IProps {
  name: string;
  label: string;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
  className?: string;
}

export default function THDatePicker({ label, name, variant, ...props }: IProps) {
  return (
    <Controller
      name={name}
      render={({ formState: { errors }, field: { value, ...fields } }) => (
        <DatePicker
          errorMessage={(errors[name]?.message as string | undefined) || ""}
          isInvalid={!!errors[name]}
          label={label}
          variant={variant}
          {...fields}
          {...props}
        />
      )}
    />
  );
}
