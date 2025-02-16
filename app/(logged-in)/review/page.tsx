import ReviewLoader from "@/ui/prod-loaders/review-loader";
import Review from "@/ui/prod-steps/review";
import { Suspense } from "react";

export default function Page() {
	return (
		<Suspense fallback={<ReviewLoader />}>
			<Review />
		</Suspense>
	);
}
