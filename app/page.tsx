import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/button";
import LoginForm from "./ui/login-form";
import { Suspense } from "react";
import Loading from "./signup/loading";
import HeroImg from "images/home-hero.png";
import { lusitana, inter } from "@ui/fonts";

export default function Home() {
	return (
		<main className="flex flex-col grow-1 gap-2 items-center justify-center">
			{/* <div className="flex flex-col flex-grow-1 justify-center items-center z-1 p-10"> */}
			<div className="fixed">
				<Image
					className="z-0 opacity-80 md:rounded-4xl"
					src={HeroImg}
					alt="ShopBot Logo"
					width={700}
					height={700}
					// fill={true}
					priority
				/>
			</div>
			<div className="rounded-4xl bg-white z-1 md:p-10 p-2 md:opacity-90 opacity-[75%]">
				<div>
					<h1 className="text-4xl font-bold text-center">Welcome to ShopBot</h1>
					<h2 className="text-2xl font-bold text-center">Your AI shopping buddy!</h2>
				</div>
				<Suspense fallback={<Loading />}>
					<LoginForm />
				</Suspense>
				{/* <Button>
						<Link href="/home">Home</Link>
					</Button> */}
			</div>
			{/* </div> */}
		</main>
	);
	/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
					Go to nextjs.org →
				</a>
			</footer> */
}
