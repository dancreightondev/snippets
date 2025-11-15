"use client";

import { DndContext, DragEndEvent, DragOverlay } from "@dnd-kit/core";
import { BaseSnippet } from "./_components/BaseSnippet";
import { Canvas } from "./_components/Canvas";
import { useState } from "react";

export default function Home() {
	const [activeId, setActiveId] = useState<string | null>(null);

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleDragStart = (event: any) => {
		setActiveId(event.active.id);
	};
	const handleDragEnd = (event: DragEndEvent) => {
		if (event.over?.id === "canvas") {
			// Fire your custom event here
			alert("Palette item dropped on canvas!");
		}
	};

	return (
		<main className="flex min-h-screen items-center justify-center font-sans">
			<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
				<BaseSnippet name="Test Snippet">
					<span>Snippet content</span>
				</BaseSnippet>
				<Canvas onSnippetDrop={() => {}} className="size-full" />
				<DragOverlay>
					{activeId ? (
						<BaseSnippet
							name="Test Snippet"
							className="pointer-events-none opacity-80"
						>
							<span>Snippet content</span>
						</BaseSnippet>
					) : null}
				</DragOverlay>
			</DndContext>
		</main>
	);
}
