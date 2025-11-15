import { FC } from "react";
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
			{text}
		</BaseSnippet>
	);
};
