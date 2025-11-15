import { SnippetData } from "~/app/lib/types";
import { TextSnippet } from "../_components/snippets/TextSnippet";
import { v4 as uuidv4 } from "uuid";

export function renderSnippet(snippet: SnippetData, paletted: boolean) {
	// Use snippet.id to determine type (e.g., "textSnippet")
	if (snippet.id === "textSnippet") {
		return (
			<TextSnippet
				key={uuidv4()}
				draggableId={snippet.id}
				name={snippet.name}
				text={snippet.text}
				paletted={paletted}
			/>
		);
	}
	// Add more cases for other snippet types as needed
	return null;
}
