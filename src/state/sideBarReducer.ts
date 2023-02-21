import { createSlice } from "@reduxjs/toolkit";
import { menu } from "../util/global";

export interface SideBarState {
	selected: number;
	menu_value: string;
}

const initialState: SideBarState = {
	selected: 1,
	menu_value: "Your Info",
};

export const SideBarSlice = createSlice({
	name: "sideBar",
	initialState,
	reducers: {
		setSideBar: (state, action) => {
			state.selected = action.payload;
			var data = menu[action.payload - 1];
			state.menu_value = data.value;
		},
	},
});

export const { setSideBar } = SideBarSlice.actions;

export default SideBarSlice.reducer;
