/* eslint-disable @typescript-eslint/no-empty-object-type */
import { FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";
import { renderSnippet } from "../_utils/snippets";
import { ALL_PALETTE_SNIPPETS } from "~/app/lib/constants";

interface PaletteProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
}

export const Palette: FC<PaletteProps> = ({ className, ...props }) => {
	return (
		<div
			className={twClassMerge(
				className,
				"w-96 mx-auto flex justify-center items-center gap-4"
			)}
			{...props}
		>
			{ALL_PALETTE_SNIPPETS.map((snippet) =>
				renderSnippet(snippet, true)
			)}
		</div>
	);
};
