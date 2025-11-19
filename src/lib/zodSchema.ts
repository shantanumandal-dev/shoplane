import z from "zod";

export const registerSchema = z.object({
	name: z.string().min(2, { message: "Must be 2 or more characters long" }),
	phone: z
		.string()
		.min(10, { message: "Invalid phone number" })
		.max(10, { message: "Invalid phone number" }),
	password: z.string().min(6, { message: "Must be 6 or more characters long" }),
});

export const loginSchema = z.object({
	phone: z
		.string()
		.min(10, { message: "Invalid phone number" })
		.max(10, { message: "Invalid phone number" }),
	password: z.string().min(6, { message: "Must be 6 or more characters long" }),
});
