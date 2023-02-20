import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { plans } from "../util/global";

export type userPlanState = {
	logo: string;
	name: string;
	priceMonthly: number;
	priceYearly: number;
	monthOrYear: "monthly" | "yearly";
};

const defaultPlan = plans[0];
const defaultMonthOrYear = "monthly";

const initialState: userPlanState = {
	...defaultPlan,
	monthOrYear: defaultMonthOrYear,
};

if (localStorage.getItem("userPlan")) {
	const userPlan = JSON.parse(
		localStorage.getItem("userPlan") as string
	) as userPlanState;
	initialState.name = userPlan.name;
	initialState.logo = userPlan.logo;
	initialState.priceMonthly = userPlan.priceMonthly;
	initialState.priceYearly = userPlan.priceYearly;
	initialState.monthOrYear = userPlan.monthOrYear;
}

export type updatePlanPayloadType = {
	planName: string;
	monthOrYear: "monthly" | "yearly";
};

export const userPlanSlice = createSlice({
	name: "userPlan",
	initialState,
	reducers: {
		updatePlan: (state, action: PayloadAction<updatePlanPayloadType>) => {
			const newName = action.payload.planName;
			const newPlan = plans.find((plan) => plan.name === newName);
			if (newPlan) {
				state = { ...newPlan, monthOrYear: action.payload.monthOrYear };
			}
			localStorage.setItem("userPlan", JSON.stringify(state));
			return state;
		},
		updateMonthOrYear: (
			state,
			action: PayloadAction<"monthly" | "yearly">
		) => {
			state.monthOrYear = action.payload;
			localStorage.setItem("userPlan", JSON.stringify(state));
			return state;
		},
	},
});

export const { updatePlan, updateMonthOrYear } = userPlanSlice.actions;

export default userPlanSlice.reducer;
