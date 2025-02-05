"use client";

import { getAllProducts } from "../lib/actions";
import { useActionState } from "react";

export default function Page() {
	const [state, formAction] = useActionState(getAllProducts, null);

	return (
		<main className="text-2xl">
			<div>Home Page.</div>
			<div id="apis">
				<span>API's</span>
				<ol>
					<li>
						<form action={formAction}>
							Get product info
							<button className="bg-blue-500 rounded-md text-lg p-2">GET</button>
						</form>
					</li>
				</ol>
			</div>
		</main>
	);
}
