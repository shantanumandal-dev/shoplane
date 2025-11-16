import LoginForm from "@/components/LoginForm";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "User LogIn",
	description: "User LogIn ",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card>
					<Image
						src="/flash sale.webp"
						alt="image"
						height={40}
						width={350}
					/>
					<CardHeader>
						<CardTitle className="text-3xl">Log In</CardTitle>
					</CardHeader>
					<CardContent>
						<LoginForm />
					</CardContent>
					<CardFooter>
						Dont have an Account?
						<Link
							href={"/signup"}
							className="space-x-5 text-blue-800">
							Sign Up
						</Link>
						Here
					</CardFooter>
				</Card>
			</section>
		</>
	);
};

export default page;
