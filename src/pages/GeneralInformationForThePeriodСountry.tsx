import React, { useEffect } from "react";
import { FormSelectCountry } from "../components/FormSelectCountry";
import { FormSelectDate } from "../components/FormSelectdate";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Charts } from "../components/Charts";

export const GeneralInformationForThePeriodCountri = () => {
	const dispatch = useAppDispatch();
	const { country } = useAppSelector((state) => state.countryReducer);

	return (
		<div className="GeneralInformationForThePeriodCountri">
			<div className="Form">
				<FormSelectDate />
				<FormSelectCountry />
			</div>
			<Charts />
		</div>
	);
};
