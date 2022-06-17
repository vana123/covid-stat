import React, { useEffect } from "react";
import { FormSelectDate } from "../components/FormSelectdate";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchStat } from "../store/reducers/ActionCreater";
import { Charts } from "../components/Charts";
import { countrySlise } from "../store/reducers/Country";
import { statSlise } from "../store/reducers/stat";

export const GeneralInformationForThePeriod = () => {
	const dispatch = useAppDispatch();
	const { country } = useAppSelector((state) => state.countryReducer);
	const { isLoading, error, data } = useAppSelector(
		(state) => state.statReducer
	);
	const { date } = useAppSelector((state) => state.dateReducer);

	useEffect(() => {
		dispatch(fetchStat(`daily/${date}`));
		dispatch(countrySlise.actions.chenge(""));
	}, [date]);

	useEffect(() => {
		dispatch(statSlise.actions.statSelectCountry(country));
	}, [data]);

	return (
		<div className="GeneralInformationForThePeriod">
			<div className="Form">
				<FormSelectDate />
			</div>
			<Charts />
		</div>
	);
};
