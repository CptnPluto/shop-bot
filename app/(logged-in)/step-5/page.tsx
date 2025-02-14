import { Button } from "@/ui/custom-components";
import OrderConf from "@/ui/steps/order-conf";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<OrderConf />
			</Suspense>
			<Button>
				<Link href="/step-6">Review Order</Link>
			</Button>
		</main>
	);
}
