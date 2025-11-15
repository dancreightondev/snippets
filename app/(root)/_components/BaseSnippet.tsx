"use client";

import Image from "next/image";
import { FC, isValidElement } from "react";
import { twClassMerge } from "~/app/utils/tailwind";
import { SnippetIcon } from "~/app/lib/types";
import { useDraggable } from "@dnd-kit/core";
import { TbQuestionMark, TbX, TbDots } from "react-icons/tb";

export interface BaseSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	name: string;
	icon?: SnippetIcon;
	paletted?: boolean;
	draggableId: string;
}

export const BaseSnippet: FC<BaseSnippetProps> = ({
	name,
	icon,
	paletted,
	children,
	className,
	draggableId,
	...props
}) => {
	const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
		id: draggableId,
	});

	// Palette appearance
	if (paletted) {
		return (
			<div
				className={twClassMerge(
					className,
					"p-4 rounded-lg shadow transition duration-60 size-min bg-primary/10 hover:bg-primary/50 hover:text-primary hover:cursor-grab",
					isDragging ? "opacity-0 cursor-grabbing" : ""
				)}
				ref={setNodeRef}
				{...listeners}
				{...attributes}
				{...props}
			>
				<span
					id="palette-icon"
					className="size-8 relative flex items-center justify-center text-2xl"
				>
					{typeof icon === "string" ? (
						<Image
							src={icon}
							alt={name}
							fill
							className="object-contain"
						/>
					) : isValidElement(icon) ? (
						<span className="size-full flex items-center justify-center">
							{icon}
						</span>
					) : (
						<TbQuestionMark className="size-full" />
					)}
				</span>
			</div>
		);
	}

	// Canvas appearance
	return (
		<div
			className={twClassMerge(
				className,
				"flex flex-col items-center justify-center transition duration-60"
			)}
		>
			<div className="bg-primary/10 rounded-lg my-2 w-full">
				<div
					id="snippet-header"
					className="py-2 px-3 text-midground flex flex-row items-center justify-between"
				>
					<span id="snippet-title" className="flex">
						{name}
					</span>
					<span id="snippet-buttons" className="flex gap-2">
						<button
							id="snippet-options"
							className="hover:cursor-pointer hover:text-primary"
						>
							<TbDots />
						</button>
						<button
							id="snippet-remove"
							className="hover:cursor-pointer hover:text-danger"
						>
							<TbX />
						</button>
					</span>
				</div>
				<div
					id="snippet-content"
					className="bg-background m-2 mt-0 p-4 rounded-sm"
				>
					{children}
				</div>
			</div>
		</div>
	);
};
