'use-client'

import { placeOrder } from "@/lib/actions";
import { Suspense } from "react";
import OrderConfLoader from "../prod-loaders/orderConf-loader";
import OrderConf from "./order-conf";
import { Button } from "../custom-components";

export default async function Cart(cart: any) {
	const order = await placeOrder(cart);
    const handleClick = async() => {
        const order = await placeOrder(cart)
    }

	return (
		<Suspense fallback={<OrderConfLoader />} >
            <Button onClick={handleClick}>Place Order</Button>
            <OrderConf order={order.content}/>
        </Suspense>
	);
}
