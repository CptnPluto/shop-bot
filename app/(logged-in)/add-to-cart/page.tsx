import { addToCart } from "@/lib/actions";
import CartLoader from "@/ui/prod-loaders/cart-loader";
import Cart from "@/ui/prod-steps/cart";
import { Suspense } from "react";

export default async function Page() {
    const cart = await addToCart([]);

    return (
        <Suspense fallback={<CartLoader />}>
            <Cart cart={cart}/>
        </Suspense>
    )
}

