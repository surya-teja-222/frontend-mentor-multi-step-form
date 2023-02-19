import {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	useEffect,
	useState,
} from "react";

import { useDispatch, useSelector } from "react-redux";
import Item from "./components/sideBarItem";
import Handler from "./containers/handler";
import { setSideBar, SideBarState } from "./state/sideBarReducer";
import { appProps, menu } from "./util/global";

function App(props: appProps) {
	const sideBar = useSelector((state: any) => state.sideBar as SideBarState);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setSideBar(props.id));
	}, []);

	function Menu() {
		return (
			<>
				{menu.map((item, index) => {
					var select = index === sideBar.selected - 1;
					return (
						<Item
							key={index}
							id={item.id}
							selected={select}
							value={item.value}
							to={item.to}
						/>
					);
				})}
			</>
		);
	}

	return (
		<div className="App">
			<div className="center">
				<div className="left">
					<Menu />
				</div>
				<div className="right">
					<Handler />
				</div>
			</div>
		</div>
	);
}

export default App;
