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
    .string({
      required_error: "Date of Birth is required",
    })
    .min(1, "Date of Birth is required"),
  gender: z.string({
    required_error: "Gender is required",
  }),
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
