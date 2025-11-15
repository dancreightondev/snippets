"use client";

import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core";
import { Canvas } from "./_components/Canvas";
import { useState, useEffect } from "react";
import { Palette } from "./_components/Palette";
import { PALETTE_SNIPPETS } from "~/app/lib/constants";
import { renderSnippet } from "./_utils/snippets";
import { SnippetData } from "~/app/lib/types";

export default function Home() {
	const [activeId, setActiveId] = useState<string | null>(null);
	const [canvasSnippets, setCanvasSnippets] = useState<SnippetData[]>([]);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleDragStart = (event: any) => {
		console.log("Starting drag of element with ID:", event.active.id);
		setActiveId(event.active.id);
	};

	const handleDragEnd = (event: DragEndEvent) => {
		console.log("Ending drag of element with ID:", activeId);
		if (event.over?.id === "canvas") {
			handleSnippetDrop(activeId);
		}
		setActiveId(null);
	};

	useEffect(() => {
		console.log("Canvas snippets updated:", canvasSnippets);
	}, [canvasSnippets]);

	const handleSnippetDrop = (snippetId: string | null) => {
		if (snippetId) {
			const snippet = PALETTE_SNIPPETS[snippetId];
			if (snippet) {
				setCanvasSnippets((prev) => [...prev, snippet]);
			}
		}
	};

	return (
		<main className="flex min-h-screen px-16 items-center justify-center font-sans">
			<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
				<DragOverlay>
					{activeId
						? (() => {
								const snippet = PALETTE_SNIPPETS[activeId];
								console.log("DragOverlay snippet:", snippet);
								if (snippet) {
									return renderSnippet(snippet, true);
								}
								return null;
							})()
						: null}
				</DragOverlay>
				<div className="flex flex-col w-full">
					<Canvas
						onSnippetDrop={handleSnippetDrop}
						className="size-full"
						snippets={canvasSnippets}
					/>
					<Palette />
				</div>
			</DndContext>
		</main>
	);
}
