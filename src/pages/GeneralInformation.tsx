import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchStat } from "../store/reducers/ActionCreater";
import { useSelector } from "react-redux";
import { Charts } from "../components/Charts";
import { countrySlise } from "../store/reducers/Country";
import { statSlise } from "../store/reducers/stat";
import { dateSlise } from "../store/reducers/Date";

export const GeneralInformation = () => {
	const dispatch = useAppDispatch();
	const { country } = useAppSelector((state) => state.countryReducer);
	const { isLoading, error, data } = useAppSelector(
		(state) => state.statReducer
	);
	const { date } = useAppSelector((store) => store.dateReducer);

	useEffect(() => {
		const today = new Date();
		dispatch(
			dateSlise.actions.chenge(
				`${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`
			)
		);
		dispatch(fetchStat(`daily/${date}}`));
		dispatch(countrySlise.actions.chenge(""));
	}, []);

	return (
		<div className="GeneralInformation">
			<Charts />
		</div>
	);
};
