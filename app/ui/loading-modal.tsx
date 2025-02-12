import clsx from "clsx";

export default function LoadingModal({ isPending }: { isPending: boolean }) {
	console.log("Rendering modal with isPending: ", isPending);
	return (
		<div
			id="popup-modal"
			tabIndex={-1}
			className={clsx(
				"flex top-0 right-0 left-0 z-50 justify-center items-center w-full fixed h-screen max-h-full bg-gray-600 bg-opacity-70"
			)}
			// className={clsx("overflow-y-auto overflow-x-hidden fixed z-50 top-1/2 y-1/2 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full")}
		>
			<div className="absolute p-4 w-full max-w-md max-h-full flex items-center justify-center gap-2 animate-bounce">
				<p>Loading</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
					/>
				</svg>
			</div>
		</div>
	);
}

export function stuff() {
	// fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center

	return (
		<div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
			<button
				type="button"
				className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
				data-modal-hide="popup-modal"
			>
				<svg
					className="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					{/* <path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
							/> */}
				</svg>
				<span className="sr-only">Close modal</span>
			</button>
			<div className="p-4 md:p-5 text-center">
				<svg
					className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						// stroke="currentColor"
						// stroke-linecap="round"
						// stroke-linejoin="round"
						// stroke-width="2"
						d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					/>
				</svg>
				<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
					Are you sure you want to delete this product?
				</h3>
				<button
					data-modal-hide="popup-modal"
					type="button"
					className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
				>
					Yes, I'm sure
				</button>
				<button
					data-modal-hide="popup-modal"
					type="button"
					className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
				>
					No, cancel
				</button>
			</div>
		</div>
	);
}
