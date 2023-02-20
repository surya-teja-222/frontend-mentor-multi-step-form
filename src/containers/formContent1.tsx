import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
	PersonalInfoState,
	setPersonalInfo,
} from "../state/personalInfoReducer";
import { setSideBar } from "../state/sideBarReducer";

function formContent1() {
	const personalInfo = useSelector(
		(state: any) => state.personalInfo as PersonalInfoState
	);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const inputElements: NodeListOf<HTMLInputElement> =
			document.querySelectorAll(
				".input__field"
			) as NodeListOf<HTMLInputElement>;

		inputElements.forEach((input) => {
			var id = "error_" + input.id;
			var error = document.getElementsByClassName(
				id
			)[0] as HTMLSpanElement;

			input.addEventListener("invalid", (e) => {
				e.preventDefault();
				error.innerHTML = input.validationMessage;
				input.classList.add("input__field--error");
			});

			input.addEventListener("input", () => {
				error.innerHTML = "";
				input.classList.remove("input__field--error");
			});
		});
	}, []);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());
		dispatch(setPersonalInfo(data));
		navigate("/plan", { replace: true });
		dispatch(setSideBar(2));
	}
	return (
		<div>
			<div className="">
				<h1 className="form__head">Personal Info</h1>
				<p className="form__p">
					Please provide your name, email address, and phone number.
				</p>
			</div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form_item">
					<div className="label_container">
						<label className="form__label" htmlFor="name">
							Name
						</label>
						<span className="error error_name"></span>
					</div>
					<input
						type="text"
						name="name"
						id="name"
						required
						defaultValue={personalInfo.name}
						className="input__field"
						placeholder="e.g. Stephen King"
					/>
				</div>
				<div className="form_item">
					<div className="label_container">
						<label className="form__label" htmlFor="email">
							Email Address
						</label>
						<span className="error error_email"></span>
					</div>
					<input
						type="email"
						name="email"
						id="email"
						required
						defaultValue={personalInfo.email}
						className="input__field"
						placeholder="e.g. stephenking@lorem.com"
					/>
				</div>
				<div className="form_item">
					<div className="label_container">
						<label className="form__label" htmlFor="mobile">
							Phone Number
						</label>
						<span className="error error_mobile"></span>
					</div>
					<input
						type="tel"
						name="mobile"
						id="mobile"
						required
						defaultValue={personalInfo.phone}
						className="input__field"
						placeholder="e.g. +1 234 567 890"
					/>
				</div>
				<button className="next_step" type="submit">
					Next Step
				</button>
			</form>
		</div>
	);
}

export default formContent1;
