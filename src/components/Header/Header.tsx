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
					<Link href={"/"}>
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
								<DropdownMenuItem>
									Log In <LogIn />
								</DropdownMenuItem>
								<DropdownMenuItem>
									Sign Up <UserRoundCheck />
								</DropdownMenuItem>
								<DropdownMenuItem>
									Shoplane Premium <BadgePlus color="#ff0000" />
								</DropdownMenuItem>
								<DropdownMenuItem>
									Help & Support <BadgeInfo />
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</Link>

					{/* <ThemeToggleButton /> */}
				</nav>
			</div>
		</header>
	);
};

export default Header;
