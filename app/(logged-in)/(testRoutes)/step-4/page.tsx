import { Button } from "@/ui/custom-components";
import Cart from "@/ui/test-steps/cart";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Cart />
			</Suspense>
			<Button>
				<Link href="/step-5">Order</Link>
			</Button>
		</main>
	);
}
