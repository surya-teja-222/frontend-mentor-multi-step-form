import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PlanComponent from "../components/planComponent";
import { setSideBar, SideBarState } from "../state/sideBarReducer";
import { updateMonthOrYear, userPlanState } from "../state/userPlanReducer";
import { plans } from "../util/global";

function formContent2() {
	const selectedPlan = useSelector(
		(state: any) => state.planInfo as userPlanState
	);
	const sideBar = useSelector((state: any) => state.sideBar as SideBarState);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	function handleCheckBoxChange(e: any) {
		if (e.target.checked) {
			dispatch(updateMonthOrYear("yearly"));
		} else {
			dispatch(updateMonthOrYear("monthly"));
		}
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		navigate("/addons", { replace: true });
		dispatch(setSideBar(sideBar.selected + 1));
	}

	function handlePrev(e: any) {
		e.preventDefault();
		navigate("/info", { replace: true });
		dispatch(setSideBar(sideBar.selected - 1));
	}
	return (
		<div className="form_2">
			<div className="">
				<h1 className="form__head">Select your plan</h1>
				<p className="form__p">
					You have the option of monthly or yearly billing.
				</p>
			</div>
			<div className="form__content">
				<div className="plan_component_parent">
					{plans.map((plan, index) => {
						return (
							<PlanComponent
								logo={plan.logo}
								monthOrYear={selectedPlan.monthOrYear}
								name={plan.name}
								priceMonthly={plan.priceMonthly}
								priceYearly={plan.priceYearly}
								key={index}
							/>
						);
					})}
				</div>

				<div className="checkbox">
					<span data-selected={selectedPlan.monthOrYear == "monthly"}>
						Monthly
					</span>
					<label className="switch">
						<input
							type="checkbox"
							name="yearlyOrMonthly"
							id="yearlyOrMonthly"
							onChange={handleCheckBoxChange}
							defaultChecked={
								selectedPlan.monthOrYear == "yearly"
							}
						/>
						<span className="slider"></span>
					</label>

					<span data-selected={selectedPlan.monthOrYear == "yearly"}>
						Yearly
					</span>
				</div>
			</div>
			<div className="bottom_nav_bar ">
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

export default formContent2;
