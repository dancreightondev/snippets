/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useDroppable } from "@dnd-kit/core";
import { renderSnippet } from "../_utils/snippets";
import { SnippetData } from "~/app/lib/types";
import { FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";

interface CanvasProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	snippets?: SnippetData[];
	onSnippetDrop?: (snippetId: string | null) => void;
}

export const Canvas: FC<CanvasProps> = ({
	className,
	snippets,
	onSnippetDrop,
	...props
}) => {
	const { setNodeRef, isOver } = useDroppable({ id: "canvas" });

	return (
		<div id="canvas" className={twClassMerge(className)}>
			<div id="canvas-snippets" className="flex flex-col w-full">
				{snippets?.map((snippet, idx) => renderSnippet(snippet, false))}
			</div>
			<div
				id="canvas-dropzone"
				className={twClassMerge(
					"min-h-[100px] rounded-xl transition flex items-center justify-center",
					isOver
						? "border-primary border-3 border-dashed bg-primary/25"
						: ""
				)}
				ref={setNodeRef}
				{...props}
			>
				{isOver ? (
					<span className="text-primary font-semibold">
						Drop it here!
					</span>
				) : (
					<span className="text-midground">
						{snippets && snippets.length < 1
							? "Drag your first snippet here"
							: "Drag another snippet here"}
					</span>
				)}
			</div>
		</div>
	);
};
