import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
	return (
		<button
			{...rest}
			className={clsx(
				"flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
				className
			)}
		>
			{children}
		</button>
	);
}

export function Input({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			{...rest}
			className={clsx(
				"peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500",
				className
			)}
		/>
	);
}
export function Label({ children, className, ...rest }: LabelProps) {
	return (
		<label {...rest} className={clsx("mb-2 block text-sm font-medium", className)}>
			{children}
		</label>
	);
}
