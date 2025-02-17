import Review from "@/ui/test-steps/review";
import { Suspense } from "react";

export default async function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Review />
		</Suspense>
	);
}
