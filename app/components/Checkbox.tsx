import { FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	label?: string;
	helperText?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
	label,
	helperText,
	id,
	className,
	...props
}) => {
	return (
		<div
			className={twClassMerge(className, "flex items-center mb-4")}
			{...props}
		>
			<input
				id={id}
				className="size-4 rounded-xs bg-background focus:ring-2 focus:ring-primary"
				type="checkbox"
				value=""
			/>
			<div className="ms-2 text-sm">
				{label && (
					<label htmlFor={id} className="font-medium">
						{label}
					</label>
				)}
				{helperText && (
					<p className="text-xs font-normal text-midground">
						{helperText}
					</p>
				)}
			</div>
		</div>
	);
};
