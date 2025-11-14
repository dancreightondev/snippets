import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";

const variants = cva(
	"inline-flex items-center justify-center font-semibold transition duration-60 hover:cursor-pointer focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 ring-foreground inset-ring-background",
	{
		variants: {
			appearance: {
				filled: "focus:inset-ring-2",
				outlined: "bg-transparent border focus:border-background",
				text: "bg-transparent border-none shadow-none hover:underline",
			},
			intent: {
				primary: "", // no class names are shared between all `intent="primary"` combinations
				danger: "", // no class names are shared between all `intent="danger"` combinations
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
		compoundVariants: [
			{
				appearance: "filled",
				intent: "primary",
				class: "bg-primary text-background border-primary hover:bg-primary/75 active:bg-primary/50",
			},
			{
				appearance: "filled",
				intent: "danger",
				class: "bg-danger text-background border-danger hover:bg-danger/75 active:bg-danger/50",
			},
			{
				appearance: "outlined",
				intent: "primary",
				class: "border-primary text-primary hover:bg-primary/10 active:bg-primary/5",
			},
			{
				appearance: "outlined",
				intent: "danger",
				class: "border-danger text-danger hover:bg-danger/10 active:bg-danger/5",
			},
			{
				appearance: "text",
				intent: "primary",
				class: "text-primary active:text-primary/75",
			},
			{
				appearance: "text",
				intent: "danger",
				class: "text-danger active:text-danger/75",
			},
		],
		defaultVariants: {
			appearance: "filled",
			intent: "primary",
			displaySize: "md",
			rounded: "md",
		},
	}
);

interface ButtonProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof variants> {
	// Custom props go here
	disabled?: boolean;
	type?: "button" | "reset" | "submit";
}

export const Button: FC<ButtonProps> = forwardRef<
	HTMLButtonElement,
	ButtonProps
>(
	(
		{
			children,
			className,
			disabled,
			type,
			appearance,
			intent,
			displaySize,
			rounded,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref as React.Ref<HTMLButtonElement>}
				className={twClassMerge(
					variants({
						appearance,
						intent,
						displaySize,
						rounded,
						className,
					})
				)}
				disabled={disabled}
				type={type}
				{...props}
			>
				{children}
			</button>
		);
	}
);

Button.displayName = "Button";
