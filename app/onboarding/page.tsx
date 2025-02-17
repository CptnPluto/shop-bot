import Onboarding from "@/ui/prod-steps/onboarding";
import { Suspense } from "react";

export default async function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Onboarding />
        </Suspense>
    )
}