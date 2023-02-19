import { useSelector, useDispatch } from "react-redux";
import { SideBarState } from "../state/sideBarReducer";
import FormContent1 from "./formContent1";
import FormContent2 from "./formContent2";
import FormContent3 from "./formContent3";
import FormContent4 from "./formContent4";

function Handler() {
	const sideBar = useSelector((state: any) => state.sideBar as SideBarState);
	const dispatch = useDispatch();

	switch (sideBar.selected) {
		case 1:
			return <FormContent1 />;
		case 2:
			return <FormContent2 />;
		case 3:
			return <FormContent3 />;
		case 4:
			return <FormContent4 />;
		default:
			return <FormContent1 />;
	}
}

export default Handler;
