import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/button";
import LoginForm from "./ui/login-form";
import { Suspense } from "react";
import Loading from "./signup/loading";

export default function Home() {
	return (
		<div>
			<main className="flex flex-col gap-2 h-screen">
				{/* <Image
					className="dark:invert"
					src="/next.svg"
					alt="Next.js logo"
					width={180}
					height={38}
					priority
				/> */}
				<div className="w-full h-20 bg-blue-500 flex self-start"></div>
				<div className="flex flex-col gap-4 items-center flex-grow-[1] justify-center">
					<div>
						<h1 className="text-4xl font-bold text-center">Welcome to ShopBot</h1>
                        <h2 className="text-2xl font-bold text-center">Your AI shopping buddy!</h2>
						<p className="text-lg text-center">Get started by signing up, or logging in.</p>
					</div>
					<Suspense fallback={<Loading />}>
						<LoginForm />
					</Suspense>
					<Button>
						<Link href="/home">Home</Link>
					</Button>
					
				</div>
				
			</main>
			{/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
			</footer> */}
		</div>
	);
}
