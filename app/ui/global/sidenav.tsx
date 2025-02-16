import Link from "next/link";
// import NavLinks from "@/app/ui/dashboard/nav-links";
import { PowerIcon, HomeIcon } from "@heroicons/react/24/outline";
import { signOut } from "auth";
import { lusitana } from "../fonts";
import NavLinks from "./navlinks";

export default function SideNav() {
	return (
		<div className="flex h-full md:flex-col max-md:items-center px-3 py-4 md:px-2 max-md:bg-blue-500">
			<Link
				className={`${lusitana.className} text-4xl text-white mb-2 flex items-end justify-start rounded-md md:bg-blue-600 p-4 md:h-40 h-20`}
				href="/"
			>
				ShopBot
			</Link>
			<div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
			<NavLinks />
		</div>
	);
}
