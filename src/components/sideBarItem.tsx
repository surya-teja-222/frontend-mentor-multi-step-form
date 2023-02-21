import { useDispatch } from "react-redux";
import { setSideBar } from "../state/sideBarReducer";
import { sideBarItemProps } from "../util/global";
import { useNavigate } from "react-router-dom";

function Item(props: sideBarItemProps) {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleClick(e: any) {
		if (e.type === "keydown" && e.key !== "Enter") {
			return;
		}
		dispatch(setSideBar(props.id));
		navigate(props.to, { replace: true });
	}
	return (
		<div
			data-to={props.to}
			role="button"
			aria-pressed="false"
			tabIndex={1}
			key={props.id}
			onKeyDown={handleClick}
			onClick={handleClick}
			className="side_bar_item"
		>
			<div
				data-selected={props.selected ? true : false}
				className="side_bar_item_left"
			>
				<span>{props.id}</span>
			</div>
			<div className="side_bar_item_right hide_for_mobile">
				<span>step {props.id}</span>
				<h2>{props.value}</h2>
			</div>
		</div>
	);
}

export default Item;
