import Link from "next/link";

export default function OrderConf() {
    const deliverTime = "3-5 days";
	return (
		<main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
			<div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
				<h1 className="text-2xl font-bold text-center mb-4">Order Confirmation</h1>
				<p className="text-gray-700 mb-6 text-center">
					Thank you for your purchase! Your order has been successfully placed.
				</p>
				<div className="border-t pt-4">
					<p className="text-gray-600">
						Order Number: <span className="font-semibold">#123456</span>
					</p>
					<p className="text-gray-600">
						Estimated Delivery: <span className="font-semibold">{deliverTime ?? "3-5 days"}</span>
					</p>
				</div>
				<Link href="/home">
					<a className="mt-6 inline-block w-full text-center bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition">
						Back to Home
					</a>
				</Link>
			</div>
		</main>
	);
}
