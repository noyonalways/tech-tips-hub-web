import { z } from "zod";

export const commentValidationSchema = z.object({
  content: z
    .string({
      required_error: "Comment is required",
      invalid_type_error: "Comment must be string",
    })
    .min(1, "Comment is required"),
});
