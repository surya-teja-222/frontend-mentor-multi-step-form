import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarReducer";
import personalInfoReducer from "./personalInfoReducer";
import userPlanReducer from "./userPlanReducer";
import addonReducer from "./addonReducer";

export default configureStore({
	reducer: {
		sideBar: sideBarReducer,
		personalInfo: personalInfoReducer,
		planInfo: userPlanReducer,
		addons: addonReducer,
	},
});
