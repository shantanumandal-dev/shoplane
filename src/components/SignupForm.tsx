"use client";

import { useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "./shadcnui/field";
import { Input } from "./shadcnui/input";
import { RegisterType } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/zodSchema";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./shadcnui/form";

const SignupForm = () => {
	const rhform = useForm<RegisterType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		mode: "all",
	});

	const registerfunc = async (registerData: RegisterType) => {
		console.log(registerData);
	};

	return (
		<>
			<Form {...rhform}>
				<form
					onSubmit={rhform.handleSubmit(registerfunc)}
					className="grid gap-6">
					<FormField
						control={rhform.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="Enter your name"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={rhform.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="Enter your email"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={rhform.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Enter your password"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</>
	);
};

export default SignupForm;
