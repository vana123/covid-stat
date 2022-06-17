import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FormSelectDate } from "../components/FormSelectdate";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchStat } from "../store/reducers/ActionCreater";
import { Charts } from "../components/Charts";

export const GeneralInformationForThePeriod = () => {
	const dispatch = useAppDispatch();
	const { isLoading, error, data } = useAppSelector(
		(state) => state.statReducer
	);
	const { date } = useAppSelector((state) => state.dateReducer);

	useEffect(() => {
		dispatch(fetchStat(`daily/${date}`));
	}, [date]);

	return (
		<div className="GeneralInformationForThePeriod">
			<FormSelectDate />
			<Charts />
		</div>
	);
};
