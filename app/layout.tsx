import { Metadata } from "next";
import "@ui/global.css";
import { inter, lusitana } from "@ui/fonts";
import Link from "next/link";

export const metadata: Metadata = {
	title: {
		template: "%s | ShopBot",
		default: "ShopBot",
	},
	description: "The official Next.js Learn Dashboard built with App Router.",
	metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			{/* <body>{children}</body> */}
			<body className={`${inter.className} antialiased`}>
				<div className="h-screen flex flex-col">
					<header
						className={`${lusitana.className} w-full h-20 bg-blue-500 flex z-1 items-end text-4xl text-white pb-2 pl-2`}
					>
						<Link href="/">ShopBot</Link>
					</header>
					{children}
				</div>
			</body>
		</html>
	);
}
