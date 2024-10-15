import { z } from "zod";

export const contactFormValidationSchema = z.object({
  firstName: z
    .string({
      required_error: "First name ir required",
    })
    .min(1, "First name is required"),
  lastName: z
    .string({
      required_error: "Last name ir required",
    })
    .min(1, "Last name is required"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Please provide a valid email address"),
  subject: z
    .string({
      required_error: "Subject is required",
    })
    .min(1, "Subject is required"),
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(1, "Message is required"),
});
