import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import SignupForm from "@/components/SignupForm";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "User Sign Up",
	description: "User Signup ",
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
						<CardTitle className="text-3xl">Sign Up</CardTitle>
					</CardHeader>
					<CardContent>
						<SignupForm />
					</CardContent>
					<CardFooter>
						Already have an Account?
						<Link
							href={"/login"}
							className="space-x-5 text-blue-800">
							Log In
						</Link>
						Here
					</CardFooter>
				</Card>
			</section>
		</>
	);
};

export default page;
