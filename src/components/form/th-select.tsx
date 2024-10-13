import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

interface IProps {
  options: {
    key: string;
    label: string;
  }[];
  name: string;
  label?: string;
  variant?: "flat" | "faded" | "bordered" | "underlined" | undefined;
  size?: "sm" | "md" | "lg" | undefined;
  radius?: "none" | "sm" | "md" | "lg" | "full";
}

const THSelect: React.FC<IProps> = ({ name, options, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <Select
      {...register(name)}
      errorMessage={errorMessage || ""}
      {...props}
      isInvalid={!!errors[name]}
    >
      {options?.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default THSelect;
