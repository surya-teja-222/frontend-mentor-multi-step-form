export type menuType = {
	id: number;
	value: string;
	to: string;
}[];

export const menu: menuType = [
	{
		id: 1,
		value: "Your Info",
		to: "/",
	},
	{
		id: 2,
		value: "Select  Plan",
		to: "/plan",
	},
	{
		id: 3,
		value: "Add-ons",
		to: "/addons",
	},
	{
		id: 4,
		value: "Summary",
		to: "/summary",
	},
];

export type sideBarItemProps = {
	id: number;
	value: string;
	to: string;
	selected?: boolean;
};

export type appProps = {
	id: number;
};
