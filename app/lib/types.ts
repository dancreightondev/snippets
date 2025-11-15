export type SnippetIcon = string | React.ReactElement;
export interface SnippetData {
	name: string;
	id: string;
	instanceId?: string;

	// These props are not used by all snippets
	text?: string;
	code?: string;
	items?: string[];
	currentXp?: number;
	targetXp?: number;
}
