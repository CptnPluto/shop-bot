import AccountCreation from "../ui/signup/account-creation";

export default function Page() {
	return (
		<main className="flex items-center justify-center h-screen">
			<div className="relative flex max-w-[400px] w-full h-full flex-col space-y-5 p-4 ">
				<div className="flex h-40 items-end rounded-lg bg-blue-500 p-3">
					<div className="text-white">User Signup</div>
				</div>
				<AccountCreation />
			</div>
		</main>
	);
}
