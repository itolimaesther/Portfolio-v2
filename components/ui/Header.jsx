import Link from "next/link";
import { Button } from "./button";

function Header() {
	return (
		<header className="w-full fixed top-0 left-0 right-0 sm:px-14 sm:pt-14 sm:pb-8 z-10 p-6">
			<nav className="w-full">
				<ul className="flex flex-col items-end gap-3">
					<li>
						<Button
							variant="outline"
							className="rounded-3xl hover:bg-yellow-400"
						>
							<Link href="/">Portfolio</Link>
						</Button>
					</li>
					<li>
						<Button
							variant="outline"
							className="rounded-3xl hover:bg-yellow-400"
						>
							<Link href="/about">About me</Link>
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
