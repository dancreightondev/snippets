import { FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";
import { BaseSnippet, BaseSnippetProps } from "../BaseSnippet";
import { TbChecklist } from "react-icons/tb";
import { Checklist } from "~/app/components/Checklist";
import { ChecklistItemData } from "~/app/lib/types";

interface ChecklistSnippetProps
	extends React.HTMLAttributes<HTMLDivElement>,
		BaseSnippetProps {
	// Custom props go here
	items?: ChecklistItemData[];
}

export const ChecklistSnippet: FC<ChecklistSnippetProps> = ({
	name,
	items,
	className,
	draggableId,
	paletted,
	onRemove,
	...props
}) => {
	return (
		<BaseSnippet
			name={name}
			icon={<TbChecklist />}
			className={twClassMerge(className)}
			draggableId={draggableId}
			paletted={paletted}
			onRemove={onRemove}
			{...props}
		>
			<Checklist items={items ?? []} />
		</BaseSnippet>
	);
};
