import { SnippetData } from "~/app/lib/types";
import { TextSnippet } from "../_components/snippets/TextSnippet";

export function renderSnippet(snippet: SnippetData, paletted: boolean) {
	switch (snippet.type) {
		case "text":
			return (
				<TextSnippet
					key={snippet.id}
					id={snippet.id}
					name={snippet.name}
					paletted={paletted}
				/>
			);
	}
}
