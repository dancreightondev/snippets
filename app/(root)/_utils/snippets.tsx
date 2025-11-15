import { SnippetData } from "~/app/lib/types";
import { TextSnippet } from "../_components/snippets/TextSnippet";
import { v4 as uuidv4 } from "uuid";

type SnippetRenderer = (
	snippet: SnippetData,
	paletted: boolean
) => React.ReactElement | null;

const SNIPPET_RENDERERS: Record<string, SnippetRenderer> = {
	textSnippet: (snippet, paletted) => (
		<TextSnippet
			key={uuidv4()}
			draggableId={snippet.id}
			name={snippet.name}
			text={snippet.text}
			paletted={paletted}
		/>
	),

	/*

	To add a new snippet type:
	- Import its component at the top
	- Add a new entry to SNIPPET_RENDERERS with the correct id,	e.g.:

	newSnippet: (snippet, paletted) => (
		<NewSnippet ... />
	),

	*/
};

export function renderSnippet(snippet: SnippetData, paletted: boolean) {
	const renderer = SNIPPET_RENDERERS[snippet.id];
	return renderer ? renderer(snippet, paletted) : null;
}
