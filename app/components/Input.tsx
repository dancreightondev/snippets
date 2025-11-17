import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";

const variants = cva(
	"inline-flex items-center justify-center transition duration-60 hover:cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ring-foreground inset-ring-background",
	{
		variants: {
			appearance: {
				filled: "bg-foreground/5 focus:ring-2 focus:inset-ring-2",
				outlined: "border focus:ring-2",
			},
			displaySize: {
				sm: "px-3 py-1 text-sm",
				md: "px-4 py-2 text-base",
				lg: "px-6 py-3 text-lg",
				xl: "px-8 py-4 text-xl",
			},
			rounded: {
				none: "rounded-none",
				sm: "rounded-sm",
				md: "rounded-md",
				lg: "rounded-lg",
				xl: "rounded-xl",
				full: "rounded-full",
			},
		},
		compoundVariants: [],
		defaultVariants: {
			appearance: "filled",
			displaySize: "md",
			rounded: "md",
		},
	}
);

interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		VariantProps<typeof variants> {
	// Custom props go here
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
	({ className, appearance, displaySize, rounded, ...props }, ref) => {
		return (
			<input
				ref={ref}
				className={twClassMerge(
					variants({ appearance, displaySize, rounded, className })
				)}
				{...props}
			/>
		);
	}
);

Input.displayName = "Input";
