import { createSlice } from "@reduxjs/toolkit";

export interface PersonalInfoState {
	name: string;
	email: string;
	phone: string;
}

const initialState: PersonalInfoState = {
	name: "",
	email: "",
	phone: "",
};

if (localStorage.getItem("personalInfo")) {
	const personalInfo = JSON.parse(
		localStorage.getItem("personalInfo") as string
	);
	initialState.name = personalInfo.name;
	initialState.email = personalInfo.email;
	initialState.phone = personalInfo.mobile;
}

export const PersonalInfoSlice = createSlice({
	name: "personalInfo",
	initialState,
	reducers: {
		setPersonalInfo: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.phone = action.payload.mobile;
			localStorage.setItem(
				"personalInfo",
				JSON.stringify(action.payload)
			);
		},
	},
});

export const { setPersonalInfo } = PersonalInfoSlice.actions;

export default PersonalInfoSlice.reducer;
