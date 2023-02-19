import { useDispatch, useSelector } from "react-redux";
import { setSideBar, SideBarState } from "../state/sideBarReducer";
import { sideBarItemProps } from "../util/global";
import { useNavigate } from "react-router-dom";

function Item(props: sideBarItemProps) {
	const sideBar = useSelector((state: any) => state.sideBar as SideBarState);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const name = "menu_item";

	function handleClick(e: any) {
		dispatch(setSideBar(props.id));
		navigate(props.to, { replace: true });
	}
	return (
		<div data-to={props.to} onClick={handleClick} className="side_bar_item">
			<div
				data-selected={props.selected ? true : false}
				className="side_bar_item_left"
			>
				<span>{props.id}</span>
			</div>
			<div className="side_bar_item_right">
				<span>step {props.id}</span>
				<h2>{props.value}</h2>
			</div>
		</div>
	);
}

export default Item;
