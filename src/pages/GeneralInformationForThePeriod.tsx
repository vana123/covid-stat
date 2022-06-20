import React, { useEffect } from "react";
import { FormSelectDate } from "../components/FormSelectdate";
import { useAppDispatch } from "../hooks/redux";
import { Charts } from "../components/Charts";
import { countrySlise } from "../store/reducers/Country";

export const GeneralInformationForThePeriod = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(countrySlise.actions.setCountry(""));
	}, []);

	return (
		<div className="GeneralInformationForThePeriod">
			<div className="Form">
				<FormSelectDate />
			</div>
			<Charts />
			{/* <RtkQetyTest /> */}
		</div>
	);
};
