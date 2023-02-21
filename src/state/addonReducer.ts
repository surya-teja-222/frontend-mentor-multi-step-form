import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addonsState } from "../util/global";

const initialState: addonsState[] = [];

if (localStorage.getItem("addons")) {
	const addons = JSON.parse(
		localStorage.getItem("addons") as string
	) as addonsState[];
	initialState.push(...addons);
}

export type updateAddonsPayloadType = {
	addOn: addonsState;
	add: boolean;
};

export const addonSlice = createSlice({
	name: "addons",
	initialState,
	reducers: {
		updateAddons: (
			state,
			action: PayloadAction<updateAddonsPayloadType>
		) => {
			const addOn = action.payload.addOn;
			const add = action.payload.add;
			if (add) {
				state.push(addOn);
			} else {
				const index = state.findIndex((addon) => addon.id === addOn.id);
				if (index !== -1) {
					state.splice(index, 1);
				}
			}
			localStorage.setItem("addons", JSON.stringify(state));
			return state;
		},
	},
});

export const { updateAddons } = addonSlice.actions;
export default addonSlice.reducer;
