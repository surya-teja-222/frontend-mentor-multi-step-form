import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddonComponent from "../components/addonComponent";
import { setSideBar, SideBarState } from "../state/sideBarReducer";
import { addons, addonsState } from "../util/global";

function formContent3() {
	const addonsState = useSelector(
		(state: any) => state.addons as addonsState
	);
	const sideBar = useSelector((state: any) => state.sideBar as SideBarState);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleSubmit(e: any) {
		e.preventDefault();
		navigate("/summary", { replace: true });
		dispatch(setSideBar(sideBar.selected + 1));
	}

	function handlePrev(e: any) {
		e.preventDefault();
		navigate("/plan", { replace: true });
		dispatch(setSideBar(sideBar.selected - 1));
	}

	return (
		<div className="form_2">
			<div className="">
				<h1 className="form__head">Pick add-ons</h1>
				<p className="form__p">
					Add-ons help enhance your gaming experience.
				</p>
			</div>
			<div className="form__content width-fill">
				{addons.map((addon, index) => {
					return (
						<AddonComponent
							id={addon.id}
							name={addon.name}
							description={addon.description}
							priceMonthly={addon.priceMonthly}
							priceYearly={addon.priceYearly}
							key={index}
						/>
					);
				})}
			</div>
			<div className="bottom_nav_bar">
				<button className="go_back" onClick={handlePrev}>
					Go Back
				</button>
				<button className="next_step_2" onClick={handleSubmit}>
					Next Step
				</button>
			</div>
		</div>
	);
}

export default formContent3;
