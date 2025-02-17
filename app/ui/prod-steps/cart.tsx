"use client";

import { placeOrder } from "@/lib/actions";
import { useActionState } from "react";
import { Button } from "../custom-components";
import { CartType, OrderReceiptType } from "@/lib/definitions";

export default function Cart({ cart }: { cart: CartType }) {
	const initialState: OrderReceiptType = null;
	const [state, formAction] = useActionState(placeOrder, initialState);
    console.log("state: ", state);

	return (
		<main>
			<div id="cart">
				{cart &&
					cart.items.map((item) => (
						<div key={item.itemName}>
							<div>{item.itemName}</div>
							<div>{item.price}</div>
						</div>
					))}
			</div>
			<form action={formAction}>
				<Button type="submit">Place Order</Button>
			</form>
		</main>
	);
}
