import { placeOrder } from "@/lib/actions";
import { Suspense } from "react";
import OrderConfLoader from "../prod-loaders/orderConf-loader";
import OrderConf from "./order-conf";




export default async function Cart(cart: any) {
	const order = await placeOrder(cart);

	return (
		<Suspense fallback={<OrderConfLoader />} >
            <OrderConf order={order}/>
        </Suspense>
	);
}
