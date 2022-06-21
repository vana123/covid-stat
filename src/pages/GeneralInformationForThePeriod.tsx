import React, { useEffect } from "react";
import { FormSelectDate } from "../components/FormSelectdate";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Charts } from "../components/Charts";
import { countrySlise } from "../store/reducers/Country";
import { BarCharts } from "../components/BarCharts";
import { statFilterSlice } from "../store/reducers/StatFirlter";
import { useGetStatQuery } from "../service/statService";

export const GeneralInformationForThePeriod = () => {
	const dispatch = useAppDispatch();
	const { country } = useAppSelector((state) => state.countryReducer);
	const { date } = useAppSelector((state) => state.dateReducer);
	const { isError, isLoading, data } = useGetStatQuery(date);

	useEffect(() => {
		if (data) {
			const countrys = ["Ukraine", "Poland", "United Kingdom", "Estonia"];
			dispatch(statFilterSlice.actions.SelectCountry({ data, countrys }));
		} else {
			dispatch(statFilterSlice.actions.setStatData([]));
		}
	}, [data, country]);

	return (
		<div className="GeneralInformationForThePeriod">
			<div className="Form">
				<FormSelectDate />
			</div>
			<Charts />
			<BarCharts />
		</div>
	);
};
