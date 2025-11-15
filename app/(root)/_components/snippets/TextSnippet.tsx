import { FC, useState } from "react";
import { BaseSnippet, BaseSnippetProps } from "../BaseSnippet";
import { twClassMerge } from "~/app/utils/tailwind";
import { SnippetIcon } from "~/app/lib/types";
import { TbAlignJustified } from "react-icons/tb";

interface TextSnippetProps
	extends React.HTMLAttributes<HTMLDivElement>,
		BaseSnippetProps {
	// Custom props go here
	text?: string;
	iconOverride?: SnippetIcon;
}

export const TextSnippet: FC<TextSnippetProps> = ({
	name,
	text,
	className,
	draggableId,
	paletted,
	onRemove,
	...props
}) => {
	const [value, setValue] = useState(text ?? "");
	return (
		<BaseSnippet
			name={name}
			icon={<TbAlignJustified />}
			className={twClassMerge(className)}
			draggableId={draggableId}
			paletted={paletted}
			onRemove={onRemove}
			{...props}
		>
			<textarea
				className="w-full rounded resize-none placeholder-midground focus:outline-none focus:border-none"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder="Type something here..."
				onInput={(e) => {
					const target = e.target as HTMLTextAreaElement;
					target.style.height = "auto";
					target.style.height = `${target.scrollHeight}px`;
				}}
			/>
		</BaseSnippet>
	);
};
