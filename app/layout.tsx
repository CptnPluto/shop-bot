import { Metadata } from "next";
import "@ui/global.css";
import { inter } from "@ui/fonts";

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
					{children}
				</div>
			</body>
		</html>
	);
}
