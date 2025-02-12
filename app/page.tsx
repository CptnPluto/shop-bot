import Image from "next/image";
import Link from "next/link";
import { Button } from "@ui/button";
import LoginForm from "./ui/login-form";
import { Suspense } from "react";
import Loading from "./signup/loading";
import HeroImg from "images/home-hero.png";

export default function Home() {
	return (
		<div>
            <main className="flex flex-col gap-2 h-screen items-center justify-center">
                <Image
                    className="z-0 fixed opacity-80 w-screen h-screen"
                    src={HeroImg}
                    alt="ShopBot Logo"
                    // width={}
                    // height={280}
                    priority
                />
				<div className="w-full h-20 bg-blue-500 flex self-start z-1"></div>
				<div className="flex flex-col gap-4 m-10 rounded-lg items-center flex-grow-1 justify-center z-1 bg-white my-30 p-10">
					<div>
						<h1 className="text-4xl font-bold text-center">Welcome to ShopBot</h1>
                        <h2 className="text-2xl font-bold text-center">Your AI shopping buddy!</h2>
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
