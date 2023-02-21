import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SideBarState } from "../state/sideBarReducer";

const FormContent1 = React.lazy(() => import("./formContent1"));
const FormContent2 = React.lazy(() => import("./formContent2"));
const FormContent3 = React.lazy(() => import("./formContent3"));
const FormContent4 = React.lazy(() => import("./formContent4"));
const ThankYou = React.lazy(() => import("./thankYou"));
function Handler() {
	const sideBar = useSelector((state: any) => state.sideBar as SideBarState);
	const dispatch = useDispatch();

	switch (sideBar.selected) {
		case 1:
			return (
				<Suspense fallback={<h1>Loading...</h1>}>
					<FormContent1 />
				</Suspense>
			);
		case 2:
			return (
				<Suspense fallback={<h1>Loading...</h1>}>
					<FormContent2 />
				</Suspense>
			);
		case 3:
			return (
				<Suspense fallback={<h1>Loading...</h1>}>
					<FormContent3 />
				</Suspense>
			);
		case 4:
			return (
				<Suspense fallback={<h1>Loading...</h1>}>
					<FormContent4 />
				</Suspense>
			);
		case 5:
			return (
				<Suspense fallback={<h1>Loading...</h1>}>
					<ThankYou />
				</Suspense>
			);
		default:
			return (
				<Suspense fallback={<h1>Loading...</h1>}>
					<FormContent1 />
				</Suspense>
			);
	}
}

export default Handler;
