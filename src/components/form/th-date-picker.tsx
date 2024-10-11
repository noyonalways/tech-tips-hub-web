import { CalendarDate, parseAbsolute } from "@internationalized/date"; // Import date utilities for conversion
import { DatePicker, DatePickerProps } from "@nextui-org/date-picker";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface IProps extends DatePickerProps {
  name: string;
  label?: string; // Optional label prop to make it more dynamic
}

const THDatePicker: React.FC<IProps> = ({ name, label, ...rest }) => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // Default controlled state

  // UseEffect to register DatePicker manually with the form
  useEffect(() => {
    register(name);
    const initialValue = getValues(name);
    if (initialValue) {
      setSelectedDate(initialValue); // Initialize with existing value from form
    }
  }, [register, name, getValues]);

  // Function to format date to yyyy-mm-dd
  const formatDateToYyyyMmDd = (date: Date) => format(date, "yyyy-MM-dd");

  // Function to convert CalendarDate or other types to JS Date
  const convertToDate = (calendarDate: CalendarDate) => {
    const dateObj = parseAbsolute(calendarDate.toString(), "UTC");
    return new Date(dateObj);
  };

  return (
    <DatePicker
      {...rest}
      value={selectedDate ?? ""} // Ensure it's always controlled, even if null
      onChange={(calendarDate) => {
        if (calendarDate) {
          const convertedDate = convertToDate(calendarDate); // Convert CalendarDate to JS Date
          const formattedDate = formatDateToYyyyMmDd(convertedDate); // Format to yyyy-mm-dd
          setSelectedDate(convertedDate); // Set selected date for controlled state
          setValue(name, formattedDate); // Set the formatted date in form
        }
      }}
      aria-label={label || "Date Picker"} // Provide a default or custom aria-label
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]} // Check if there are any validation errors
    />
  );
};

export default THDatePicker;
