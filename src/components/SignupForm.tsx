"use client";

import { RegisterType } from "@/lib/type";
import { registerSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./shadcnui/form";
import { Input } from "./shadcnui/input";

const SignupForm = () => {
	const rhform = useForm<RegisterType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			phone: "",
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
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder="Enter your Phone Number"
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
					<Button
						type="submit"
						className="cursor-pointer">
						Submit
					</Button>
				</form>
			</Form>
		</>
	);
};

export default SignupForm;
