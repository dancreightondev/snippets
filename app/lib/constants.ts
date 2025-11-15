import { SnippetData } from "~/app/lib/types";

export const APP_NAME = "snippets.zip";
export const ALL_PALETTE_SNIPPETS: SnippetData[] = [
	{
		id: "textSnippet",
		name: "Text",
	},
	{
		id: "codeSnippet",
		name: "Code",
		code: "print('Hello world!')",
	},
	{
		id: "checklistSnippet",
		name: "Checklist",
		items: ["Wake up", "Brush teeth", "Go to work"],
	},
	{
		id: "xpGoalSnippet",
		name: "XP Goal",
		currentXp: 501,
		targetXp: 1024,
	},
];
export const PALETTE_SNIPPETS: Record<string, SnippetData> = Object.fromEntries(
	ALL_PALETTE_SNIPPETS.map((snippet) => [snippet.id, snippet])
);
