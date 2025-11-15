import { FC } from "react";
import { BaseSnippet, BaseSnippetProps } from "../BaseSnippet";
import { twClassMerge } from "~/app/utils/tailwind";
import { SnippetIcon } from "~/app/lib/types";
import { BsJustifyLeft } from "react-icons/bs";

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
	id,
	...props
}) => {
	return (
		<BaseSnippet
			id={id}
			name={name}
			icon={<BsJustifyLeft />}
			className={twClassMerge(className)}
			{...props}
		>
			{text}
		</BaseSnippet>
	);
};
