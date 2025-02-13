import clsx from "clsx";

export default function LoadingModal({ isPending }: { isPending: boolean }) {
	console.log("Rendering modal with isPending: ", isPending);
	return (
		<div
			id="popup-modal"
			tabIndex={-1}
			className={clsx(
				"flex top-0 right-0 left-0 z-50 justify-center items-center w-full fixed h-screen max-h-full bg-gray-600/90",
                { "hidden": !isPending }
				
			)}
		>
			<div className="relative p-4 w-full max-w-md max-h-full flex items-center justify-center gap-2">
				<div className="flex items-center justify-center rounded-4xl">
                    
                    <p className="absolute md:text-4xl text-2xl font-bold animate-bounce bg-blue-300/50 rounded-full md:w-52 md:h-52 w-36 h-36 flex items-center justify-center">
                        Loading...
                    </p>
				</div>
			</div>
		</div>
	);
}
