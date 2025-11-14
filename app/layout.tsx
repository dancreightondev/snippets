import type { Metadata } from "next";
import {
	Atkinson_Hyperlegible_Next,
	Atkinson_Hyperlegible_Mono,
} from "next/font/google";
import "./styles/globals.css";

const ahlSans = Atkinson_Hyperlegible_Next({
	variable: "--font-atkinson-hl-sans",
	subsets: ["latin"],
});

const ahlMono = Atkinson_Hyperlegible_Mono({
	variable: "--font-atkinson-hl-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Disencumba",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${ahlSans.variable} ${ahlMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
