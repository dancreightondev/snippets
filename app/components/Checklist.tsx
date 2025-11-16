import { FC } from "react";
import { twClassMerge } from "~/app/utils/tailwind";
import { ChecklistItemData } from "~/app/lib/types";
import { Checkbox } from "~/app/components/Checkbox";

interface ChecklistItemProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	itemData: ChecklistItemData;
}

const ChecklistItem: FC<ChecklistItemProps> = ({
	itemData,
	className,
	...props
}) => {
	return (
		<div className={twClassMerge(className)} {...props}>
			<Checkbox label={itemData.text} />
		</div>
	);
};

interface ChecklistProps extends React.HTMLAttributes<HTMLDivElement> {
	// Custom props go here
	items: ChecklistItemData[];
}

export const Checklist: FC<ChecklistProps> = ({
	items,
	className,
	...props
}) => {
	return (
		<div className={twClassMerge(className)} {...props}>
			<ChecklistItem
				itemData={{ text: "Checklist item text", checked: false }}
			/>
		</div>
	);
};
