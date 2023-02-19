import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarReducer";

export default configureStore({
	reducer: {
		sideBar: sideBarReducer,
	},
});
