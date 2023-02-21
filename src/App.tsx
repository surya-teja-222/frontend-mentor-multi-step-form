import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import Item from "./components/sideBarItem";
import Handler from "./containers/handler";
import Error from "./error";
import { setSideBar, SideBarState } from "./state/sideBarReducer";
import { appProps, menu } from "./util/global";

function App(props: appProps) {
	const sideBar = useSelector((state: any) => state.sideBar as SideBarState);
	const dispatch = useDispatch();

	useEffect(() => {
		if (props.id) dispatch(setSideBar(props.id));
	}, []);

	function Menu() {
		return (
			<>
				{menu.map((item, index) => {
					if (!item.isNotVisible) {
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
					}
				})}
			</>
		);
	}

	return (
		<main className="App">
			<div role="navigation" className="left hide_for_desktop">
				<Menu />
			</div>
			<div className="center ">
				<div role="navigation" className="left hide_for_mobile">
					<Menu />
				</div>
				<div className="right" role={"main"}>
					{props.error ? <Error /> : <Handler />}
				</div>
			</div>
		</main>
	);
}

export default App;
