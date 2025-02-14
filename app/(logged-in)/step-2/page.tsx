import { Button } from "@/ui/custom-components";
import FoodData from "@/ui/steps/food-data";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
    return (
        <main>
        <Suspense fallback={<div>Loading...</div>}>
            <FoodData />
        </Suspense>
        <Button>
            <Link href="/step-3">Create Recipes</Link>
        </Button>
    </main>
    );
}
