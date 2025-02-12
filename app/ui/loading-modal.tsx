import clsx from "clsx";

export default function LoadingModal({ isPending }: { isPending: boolean }) {
	console.log("Rendering modal with isPending: ", isPending);
	return (
		<div
			id="popup-modal"
			tabIndex={-1}
			className={clsx(
				"flex top-0 right-0 left-0 z-50 justify-center items-center w-full fixed h-screen max-h-full bg-gray-600/90",
				
			)}
		>
			<div className="relative p-4 w-full max-w-md max-h-full flex items-center justify-center gap-2">
				<div className="flex items-center justify-center rounded-4xl">
                    
                    <p className="absolute text-4xl font-bold animate-bounce bg-blue-300/50 rounded-full p-6 w-48 h-48 flex items-center justify-center">
                        Loading...
                    </p>
				</div>
			</div>
		</div>
	);
}
