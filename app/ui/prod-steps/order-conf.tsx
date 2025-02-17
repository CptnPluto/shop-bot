import { getOrder } from "@/lib/actions";

export default async function OrderConf({ orderId }: { orderId: number }) {
	const getOrderById = getOrder.bind(null, orderId);
	const order = await getOrderById();

	return (
		<main className="flex flex-col h-full justify-between align-center">
			<h1 className="text-4xl">OrderConf</h1>
			<div className="w-[80%] h-[80%] border shadow-2xl">Your Order</div>
			{/* display order */}
			{order && (
				<>
					<div>{order.content.toString()}</div>
					<div>{order.message.toString()}</div>
				</>
			)}
		</main>
	);
}
