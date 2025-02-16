"use client";

import { placeOrder } from "@/lib/actions";
import { Button } from "../custom-components";
import { redirect } from "next/navigation";

export default function OrderConf(order: any) {
	const handleClick = async () => {
		await placeOrder(order);
		redirect("review");
	};

	return (
		<main className="flex flex-col h-full justify-between align-center">
			<h1 className="text-4xl">OrderConf</h1>
			<div className="w-[80%] h-[80%] border shadow-2xl">Your Order</div>
			<Button onClick={handleClick}>Confirm Order</Button>
		</main>
	);
}
