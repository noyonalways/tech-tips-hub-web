import { DatePicker, DatePickerProps } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

interface IProps extends DatePickerProps {
  name: string;
  label?: string;
}

export default function THDatePicker({
  label,
  name,
  ...props
}: IProps) {
  return (
    <Controller
      name={name}
      render={({ formState: { errors }, field: { value, ...fields } }) => (
        <DatePicker
          errorMessage={(errors[name]?.message as string | undefined) || ""}
          isInvalid={!!errors[name]}
          label={label}
          {...fields}
          {...props}
        />
      )}
    />
  );
}
