import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title should by string",
    })
    .min(2, { message: "title should by at least 2 char" })
    .max(200, { message: "title should by less than 200 char" }),
    description: z
    .string({
      required_error: "description is required",
      invalid_type_error: "description should by string",
    })
    .min(2, { message: "description should by at least 2 char" }),
 
});
