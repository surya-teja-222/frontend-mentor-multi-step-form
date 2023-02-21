import { useDispatch, useSelector } from "react-redux";
import { updateAddons } from "../state/addonReducer";
import { userPlanState } from "../state/userPlanReducer";

import { addonsState } from "../util/global";

export default function AddonComponent(params: addonsState) {
	const selectedAddons = useSelector(
		(state: any) => state.addons as addonsState[]
	);
	const userSelectPlan = useSelector(
		(state: any) => state.planInfo as userPlanState
	);
	const dispatch = useDispatch();

	var isSelected = selectedAddons.find((addon) => addon.id === params.id);

	function handleDivClick(e: any) {
		if (e.key && e.keyCode != 13 && e.keyCode != 32) {
			return;
		}
		var d = document.querySelector(
			`#addon${params.id}name`
		) as HTMLInputElement;
		if (e.target != d) {
			d.checked = !d.checked;
		}
		dispatch(
			updateAddons({
				addOn: params,
				add: d.checked ? true : false,
			})
		);
	}

	return (
		<div
			className="addon"
			role="button"
			aria-pressed="false"
			tabIndex={2}
			onClick={handleDivClick}
			onKeyDown={handleDivClick}
			data-selected={isSelected ? true : false}
		>
			<div className="addon_1">
				<label className="addon_checkbox_label"></label>
				<input
					type="checkbox"
					className="addon_checkbox"
					name={params.name}
					id={`addon${params.id}name`}
					// onChange={handleChange}
					defaultChecked={isSelected ? true : false}
				/>
				<div className="">
					<h2 className="addon_name">{params.name}</h2>
					<p className="addon_desc">{params.description}</p>
				</div>
			</div>
			<div className="">
				<p className="addon_price">
					{"+$"}
					{userSelectPlan.monthOrYear == "monthly"
						? params.priceMonthly
						: params.priceYearly}
					{userSelectPlan.monthOrYear == "monthly" ? "/mo" : "/yr"}
				</p>
			</div>
		</div>
	);
}
