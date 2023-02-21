import { useDispatch, useSelector } from "react-redux";
import { userPlanState, updatePlan } from "../state/userPlanReducer";

function PlanComponent(props: userPlanState) {
	const plan = useSelector((state: any) => state.planInfo as userPlanState);
	const dispatch = useDispatch();

	function handleClick(e: any) {
		if (e.type == "keydown" && e.key != "Enter") return;
		dispatch(
			updatePlan({
				planName: props.name,
				monthOrYear: props.monthOrYear,
			})
		);
	}

	return (
		<div
			role="button"
			aria-pressed="false"
			tabIndex={2}
			className="plan_button"
			onKeyDown={handleClick}
			onClick={handleClick}
			data-selected={plan.name == props.name}
		>
			<img src={props.logo} className="plan_image" />
			<div className="">
				<h2 className="plan_name">{props.name}</h2>
				<p className="plan_price">
					{"$"}
					{props.monthOrYear == "monthly"
						? props.priceMonthly
						: props.priceYearly}
					{"/"}
					{props.monthOrYear == "monthly" ? "mo" : "yr"}
				</p>
				{props.monthOrYear == "yearly" ? (
					<p className="plan_price_free">2 months free</p>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default PlanComponent;
