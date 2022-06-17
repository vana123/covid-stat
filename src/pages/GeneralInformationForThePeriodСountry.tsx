import React, { useEffect } from "react";
import { FormSelectCountry } from "../components/FormSelectCountry";
import { FormSelectDate } from "../components/FormSelectdate";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchStat } from "../store/reducers/ActionCreater";
import { Charts } from "../components/Charts";

export const GeneralInformationForThePeriodCountri = () => {
	const dispatch = useAppDispatch();
	const { date } = useAppSelector((state) => state.dateReducer);
	const { isLoading, error } = useAppSelector((state) => state.statReducer);

	useEffect(() => {
		dispatch(fetchStat(`daily/${date}`));
	}, [date]);

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
