"use client";

import Image from "next/image";
import { FC, isValidElement } from "react";
import { twClassMerge } from "~/app/utils/tailwind";
import { SnippetIcon } from "~/app/lib/types";
import { useDraggable } from "@dnd-kit/core";
import { BsFillQuestionCircleFill } from "react-icons/bs";

export interface BaseSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	name: string;
	icon?: SnippetIcon;
	paletted?: boolean;
}

export const BaseSnippet: FC<BaseSnippetProps> = ({
	name,
	icon,
	paletted,
	children,
	className,
	id,
	...props
}) => {
	const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
		id: id ?? name,
	});
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
						<BsFillQuestionCircleFill className="size-full" />
					)}
				</span>
			</div>
		);
	}
	return (
		<div>
			<span className="font-bold mb-2 block">{name}</span>
			{children}
		</div>
	);
};
