import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { PersonalInfoState } from "../state/personalInfoReducer";
import { SideBarState, setSideBar } from "../state/sideBarReducer";
import { userPlanState } from "../state/userPlanReducer";
import { addonsState } from "../util/global";

function formContent4() {
	const sideBar = useSelector((state: any) => state.sideBar as SideBarState);
	const planInfo = useSelector(
		(state: any) => state.planInfo as userPlanState
	);
	const personalInfo = useSelector(
		(state: any) => state.personalInfo as PersonalInfoState
	);
	const selectedAddons = useSelector(
		(state: any) => state.addons as addonsState[]
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	var totalPrice = 0;
	if (planInfo.monthOrYear == "monthly") {
		totalPrice += planInfo.priceMonthly;
		for (var i = 0; i < selectedAddons.length; i++) {
			totalPrice += selectedAddons[i].priceMonthly;
		}
	} else {
		totalPrice += planInfo.priceYearly;
		for (var i = 0; i < selectedAddons.length; i++) {
			totalPrice += selectedAddons[i].priceYearly;
		}
	}

	function handleSubmit(e: any) {
		e.preventDefault();

		// if all the fields are filled
		if (
			personalInfo.name != "" &&
			personalInfo.email != "" &&
			personalInfo.phone != "" &&
			planInfo.name != ""
		) {
			navigate("/thankyou", { replace: true });
			dispatch(setSideBar(sideBar.selected + 1));
		}

		navigate("/thankyou", { replace: true });
		dispatch(setSideBar(sideBar.selected + 1));
	}

	function handlePrev(e: any) {
		e.preventDefault();
		navigate("/addons", { replace: true });
		dispatch(setSideBar(sideBar.selected - 1));
	}
	return (
		<div className="form_2">
			<div className="">
				<h1 className="form__head">Finishing up</h1>
				<p className="form__p">
					Double-check everything looks OK before confirming.
				</p>
			</div>
			<div className="form__content width-fill">
				<div className="plan_summary">
					<div className="plan_summary_top">
						<div className="">
							<h1 className="plan_summary__head">
								{planInfo.name}
								{" ("}
								{planInfo.monthOrYear == "monthly"
									? "Monthly"
									: "Yearly"}
								{")"}
							</h1>
							<Link
								to="/plan"
								onClick={() => {
									dispatch(setSideBar(2));
								}}
								className="link"
							>
								change
							</Link>
						</div>
						<div className="">
							<p className="plan_info_price">
								{"$"}
								{planInfo.monthOrYear == "monthly"
									? planInfo.priceMonthly
									: planInfo.priceYearly}
								{planInfo.monthOrYear == "monthly"
									? "/mo"
									: "/yr"}
							</p>
						</div>
					</div>
					<hr className="hr" />
					<div className="addon_items">
						{selectedAddons.map((addon, index) => {
							return (
								<div
									key={index}
									className="plan_summary_top_addon"
								>
									<p>{addon.name}</p>
									<p className="plan_info_price_addon">
										{"+$"}
										{planInfo.monthOrYear == "monthly"
											? addon.priceMonthly
											: addon.priceYearly}
										{planInfo.monthOrYear == "monthly"
											? "/mo"
											: "/yr"}
									</p>
								</div>
							);
						})}
					</div>
				</div>

				<div className="plan_details_summary">
					<p>
						Total{" (per "}
						{planInfo.monthOrYear == "monthly" ? "month" : "year"}
						{")"}
					</p>
					<h2 className="final">
						{"+$"}
						{totalPrice}
						{planInfo.monthOrYear == "monthly" ? "/mo" : "/yr"}
					</h2>
				</div>
			</div>
			<div className="bottom_nav_bar">
				<button className="go_back" onClick={handlePrev}>
					Go Back
				</button>
				<button className="next_step_2" onClick={handleSubmit}>
					Confirm
				</button>
			</div>
		</div>
	);
}

export default formContent4;
