import React, { useEffect } from "react";
import { FormSelectCountry } from "../components/FormSelectCountry";
import { FormSelectDate } from "../components/FormSelectdate";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchStat } from "../store/reducers/ActionCreater";
import { Charts } from "../components/Charts";
import { statSlise } from "../store/reducers/stat";

export const GeneralInformationForThePeriodCountri = () => {
	const dispatch = useAppDispatch();
	const { date } = useAppSelector((state) => state.dateReducer);
	const { country } = useAppSelector((state) => state.countryReducer);
	const { isLoading, error, data } = useAppSelector(
		(state) => state.statReducer
	);

	useEffect(() => {
		dispatch(fetchStat(`daily/${date}`));
	}, [date]);

	useEffect(() => {
		dispatch(statSlise.actions.statSelectCountry(country));
	}, [data]);

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
