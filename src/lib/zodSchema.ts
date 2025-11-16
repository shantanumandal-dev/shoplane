import z from "zod";

export const registerSchema = z.object({
	name: z.string().min(2, { message: "Must be 2 or more characters long" }),
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().min(6, { message: "Must be 6 or more characters long" }),
});

export const loginSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z.string().min(6, { message: "Must be 6 or more characters long" }),
});
