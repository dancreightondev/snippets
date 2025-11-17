import { FC, useState } from "react";
import { twClassMerge } from "~/app/utils/tailwind";
import { ChecklistItemData } from "~/app/lib/types";
import { Checkbox } from "~/app/components/Checkbox";
import { TbPlus } from "react-icons/tb";

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
			<Checkbox label={itemData.text} editable />
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
	const [checklistItems, setChecklistItems] = useState<ChecklistItemData[]>(
		items ?? []
	);

	const handleAddChecklistItem = (item: ChecklistItemData) => {
		setChecklistItems((prevItems) => [...prevItems, item]);
	};

	return (
		<div
			className={twClassMerge(
				className,
				"flex flex-col transition duration-60"
			)}
			{...props}
		>
			{checklistItems.map((item, index) => (
				<ChecklistItem key={index} itemData={item} />
			))}
			<button
				id="add-item-button"
				className="hover:cursor-pointer"
				onClick={() =>
					handleAddChecklistItem({
						text: "New thing to do",
						checked: false,
					})
				}
			>
				<div className="flex flex-row items-center text-midground hover:text-foreground">
					<TbPlus />
					<span className="ms-2">List item</span>
				</div>
			</button>
		</div>
	);
};
