import { Inter_Tight, Yatra_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";

const interTight = Inter_Tight({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-interTight",
});

const yatraOne = Yatra_One({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-yatraOne",
});

export const metadata = {
	title: "Frontend Developer",
	description:
		"Esther Itolima is a Frontend Developer with 6+ years of experience",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${interTight.variable}, ${yatraOne.variable} relative sm:px-14 sm:py-14 p-6`}
			>
				<Header />
				{children}
				<footer></footer>
			</body>
		</html>
	);
}
