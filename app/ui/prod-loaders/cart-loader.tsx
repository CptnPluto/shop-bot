import { lusitana } from "@ui/fonts";

export default function CartLoader() {
	return (
		<div
			className={`${lusitana.className} test-4xl text-center h-[50%] w-[50%] border shadow-2xl`}
		>
			Loading cart...
		</div>
	);
}
