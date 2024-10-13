import { z } from "zod";

export const signUpValidationSchema = z.object({
  fullName: z
    .string({
      required_error: "Full Name is required",
    })
    .min(1, "Full Name is required")
    .trim(),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Please provide a valid email")
    .trim(),
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(1, "Username is required"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required"),
  dateOfBirth: z
    .object(
      { day: z.number(), month: z.number(), year: z.number() },
      { required_error: "Date of birth is required" }
    )
    .transform(({ day, month, year }) => {
      return `${year}-${month <= 9 ? "0" + month : month}-${
        day <= 9 ? "0" + day : day
      }`;
    }),
  gender: z
    .string({
      required_error: "Gender is required",
    })
    .min(1, "Gender is required"),
  image: z.any().optional(),
});

export const signInValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Please provide a valid email")
    .trim(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required"),
});
