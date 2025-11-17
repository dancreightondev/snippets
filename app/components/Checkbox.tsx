import { FC, useState } from "react";
import { twClassMerge } from "~/app/utils/tailwind";
import { Input } from "~/app/components/Input";
import { TbCheck } from "react-icons/tb";

interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	label?: string;
	helperText?: string;
	editable?: boolean;
	checked?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
	label,
	helperText,
	editable,
	checked,
	id,
	className,
	...props
}) => {
	const [labelText, setLabelText] = useState<string>("");
	const [isChecked, setIsChecked] = useState<boolean>(checked ?? false);
	const canBeChecked = editable ? labelText : true;

	return (
		<div
			className={twClassMerge(
				className,
				"flex items-center mb-4 transition duration-60"
			)}
			{...props}
		>
			<input
				id={id}
				type="checkbox"
				checked={isChecked}
				onChange={(e) => setIsChecked(e.target.checked)}
				className="peer sr-only"
			/>
			<button
				className={twClassMerge(
					"size-5 inline-block rounded border-2 text-midground/75 border-midground/75 bg-background",
					canBeChecked
						? isChecked
							? "hover:text-midground hover:border-midground hover:cursor-pointer"
							: "hover:text-primary hover:border-primary hover:cursor-pointer"
						: "hover:text-midground hover:border-midground hover:cursor-not-allowed"
				)}
				onClick={() => {
					if (!canBeChecked) return;
					setIsChecked(!isChecked);
				}}
				disabled={!canBeChecked}
			>
				{isChecked && <TbCheck className="size-full" />}
			</button>
			<div className="ms-4 w-full">
				{label &&
					(editable ? (
						<Input
							appearance="none"
							placeholder={label}
							onChange={(e) => setLabelText(e.target.value)}
							className={twClassMerge(
								"w-full placeholder-midground",
								isChecked && "line-through text-midground"
							)}
						/>
					) : (
						label && (
							<label
								htmlFor={id}
								className={
									isChecked
										? "line-through text-midground"
										: ""
								}
							>
								{label}
							</label>
						)
					))}
				{helperText && (
					<p className="text-xs font-normal text-midground">
						{helperText}
					</p>
				)}
			</div>
		</div>
	);
};
