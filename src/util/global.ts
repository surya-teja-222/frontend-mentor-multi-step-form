export interface plansState {
	logo: string;
	name: string;
	priceMonthly: number;
	priceYearly: number;
}

export const plans: plansState[] = [
	{
		logo: "/assets/images/icon-arcade.svg",
		name: "arcade",
		priceMonthly: 9,
		priceYearly: 90,
	},
	{
		logo: "/assets/images/icon-advanced.svg",
		name: "advanced",
		priceMonthly: 12,
		priceYearly: 120,
	},
	{
		logo: "/assets/images/icon-pro.svg",
		name: "pro",
		priceMonthly: 15,
		priceYearly: 150,
	},
];

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

export type menuType = {
	id: number;
	value: string;
	to: string;
}[];

export type sideBarItemProps = {
	id: number;
	value: string;
	to: string;
	selected?: boolean;
};

export type appProps = {
	id?: number;
	error?: boolean;
};
