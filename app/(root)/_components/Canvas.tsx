/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useDroppable } from "@dnd-kit/core";

import { FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";

interface CanvasProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	onSnippetDrop?: () => void;
}

export const Canvas: FC<CanvasProps> = ({
	className,
	onSnippetDrop,
	...props
}) => {
	const { setNodeRef, isOver } = useDroppable({
		id: "canvas",
	});
	return (
		<div
			className={twClassMerge(
				className,
				"min-h-[300px] rounded-xl border-2 transition flex items-center justify-center",
				isOver
					? "border-primary bg-primary/10"
					: "border-foreground bg-background"
			)}
			ref={setNodeRef}
			{...props}
		>
			{isOver ? (
				<span className="text-primary font-semibold">Drop here!</span>
			) : (
				<span className="text-foreground/50">Drag a snippet here</span>
			)}
		</div>
	);
};
