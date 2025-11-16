import {
	BadgeInfo,
	BadgePlus,
	CircleUserRound,
	LogIn,
	UserRoundCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../shadcnui/dropdown-menu";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
	return (
		<header
			className="fixed right-0 left-0"
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<div className="flex items-center gap-4">
						<Image
							src="/shoplane logo.png"
							alt="image"
							height={40}
							width={40}
						/>
						<h1
							className="text-2xl font-extralight"
							aria-label="App Name">
							SHOPLANE
						</h1>
					</div>
				</Link>

				<nav className="flex items-center gap-4">
					<Link href={"/"}></Link>
					<DropdownMenu>
						<DropdownMenuTrigger className="flex cursor-pointer gap-2">
							<CircleUserRound />
							Profile
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>
								Welcome <br />{" "}
								<p className="font-light">
									To access account and manage orders
								</p>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />

							<Link href={"/login"}>
								<DropdownMenuItem className="cursor-pointer">
									Log In <LogIn />
								</DropdownMenuItem>
							</Link>

							<Link href={"/signup"}>
								<DropdownMenuItem className="cursor-pointer">
									Sign Up <UserRoundCheck />
								</DropdownMenuItem>
							</Link>
							<DropdownMenuItem>
								Shoplane Premium <BadgePlus color="#ff0000" />
							</DropdownMenuItem>
							<DropdownMenuItem>
								Help & Support <BadgeInfo />
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					{/* <ThemeToggleButton /> */}
				</nav>
			</div>
		</header>
	);
};

export default Header;
