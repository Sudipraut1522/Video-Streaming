import * as z from "zod";

export const registerSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type TRegister = z.infer<typeof registerSchema>;
