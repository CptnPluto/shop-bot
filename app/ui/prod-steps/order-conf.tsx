import { getOrderById } from "@/lib/actions";

export default async function OrderConf({order} : {order: number}) {
    const orderReview = await getOrderById(order)

	return (
		<main className="flex flex-col h-full justify-between align-center">
			<h1 className="text-4xl">OrderConf</h1>
			<div className="w-[80%] h-[80%] border shadow-2xl">Your Order</div>
            {/* display order */}
		</main>
	);
}
