import { HomeIcon, PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "auth";
import Link from "next/link";

export default function NavLinks() {
	return (
		<nav className="flex grow flex-row justify-end space-x-2 md:flex-col md:space-x-0 md:space-y-2">
			<div className="flex md:flex-col  gap-2">
				<Link
					className="flex h-[48px] w-full grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
					href="/"
				>
					<HomeIcon className="w-6" />
					<span className="hidden md:block">Home</span>
				</Link>
				<form
					action={async () => {
						"use server";
						await signOut({ redirectTo: "/" });
					}}
				>
					<button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
						<PowerIcon className="w-6" />
						<div className="hidden md:block">Sign Out</div>
					</button>
				</form>
			</div>
		</nav>
	);
}
