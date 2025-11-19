"use client";

import { LoginType } from "@/lib/type";
import { loginSchema } from "@/lib/zodSchema";
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
import { toast } from "react-toastify";

const LoginForm = () => {
	const rhform = useForm<LoginType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			phone: "",
			password: "",
		},
		mode: "all",
	});

	const loginfunc = async (loginData: LoginType) => {
		console.log(loginData);

		toast.success("login successfully");
	};

	return (
		<>
			<Form {...rhform}>
				<form
					onSubmit={rhform.handleSubmit(loginfunc)}
					className="grid gap-6">
					<FormField
						control={rhform.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Phone</FormLabel>
								<FormControl>
									<Input
										type="number"
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
					<Button
						type="submit"
						className="cursor-pointer">
						Log In
					</Button>
				</form>
			</Form>
		</>
	);
};

export default LoginForm;
