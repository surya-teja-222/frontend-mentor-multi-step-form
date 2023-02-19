import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarReducer";
import personalInfoReducer from "./personalInfoReducer";

export default configureStore({
	reducer: {
		sideBar: sideBarReducer,
		personalInfo: personalInfoReducer,
	},
});
