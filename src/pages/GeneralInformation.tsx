import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchStat } from "../store/reducers/ActionCreater";
import { useSelector } from "react-redux";
import { Charts } from "../components/Charts";
import { countrySlise } from "../store/reducers/Country";
import { statSlise } from "../store/reducers/stat";

export const GeneralInformation = () => {
	const dispatch = useAppDispatch();
	const { country } = useAppSelector((state) => state.countryReducer);
	const { isLoading, error, data } = useAppSelector(
		(state) => state.statReducer
	);

	useEffect(() => {
		const today = new Date();
		console.log(
			`daily/${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`
		);
		dispatch(
			fetchStat(
				`daily/${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`
			)
		);
		dispatch(countrySlise.actions.chenge);
	}, []);

	useEffect(() => {
		dispatch(statSlise.actions.statSelectCountry(country));
	}, [data]);

	return (
		<div className="GeneralInformation">
			<Charts />
		</div>
	);
};
