"use client";

import { getAllProducts } from "@/lib/actions";
import { useActionState } from "react";
import { Button } from "@ui/button";
import Link from "next/link";

export default function Page() {
	const [state, formAction] = useActionState(getAllProducts, null);

	return (
		<main className="text-2xl">
			<div>Home Page.</div>
			<div id="apis">
				<span>API&apos;s</span>
				<ol>
					<li>
						<form action={formAction}>
							Get product info
							<Button>GET</Button>
						</form>
					</li>
				</ol>
				<ol>{state && state.message && <li>{state.message}</li>}</ol>
				<Button className="my-4">
					<Link href="../">Back</Link>
				</Button>
			</div>
		</main>
	);
}
