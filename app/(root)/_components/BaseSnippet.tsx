"use client";

import { FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";
import { useDraggable } from "@dnd-kit/core";

interface BaseSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	name: string;
	childElement: React.ReactElement;
}

export const BaseSnippet: FC<BaseSnippetProps> = ({
	name,
	childElement,
	className,
	...props
}) => {
	const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
		id: name,
	});

	return (
		<div
			className={twClassMerge(
				className,
				"hover:cursor-grab p-4 rounded-lg shadow transition",
				isDragging
					? "ring-2 ring-primary scale-105 bg-primary/10"
					: "bg-background"
			)}
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			{...props}
		>
			<span className="font-bold mb-2 block">{name}</span>
			{childElement}
		</div>
	);
};
