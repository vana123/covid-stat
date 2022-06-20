import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Charts } from "../components/Charts";
import { countrySlise } from "../store/reducers/Country";
import { dateSlise } from "../store/reducers/Date";
import { BarCharts } from "../components/BarCharts";

export const GeneralInformation = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const today = new Date();
		dispatch(
			dateSlise.actions.chengeInput(
				`${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`
			)
		);
		dispatch(countrySlise.actions.setCountry(""));
	}, []);

	return (
		<div className="GeneralInformation">
			<Charts />
			<BarCharts />
		</div>
	);
};
