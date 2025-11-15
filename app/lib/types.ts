export type SnippetIcon = string | React.ReactElement;
export interface SnippetData {
	id: string;
	type: string;
	name: string;
	text?: string;
	code?: string;
	items?: string[];
	currentXp?: number;
	targetXp?: number;
}
