import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { dateSlise } from "../store/reducers/Date";

export const FormSelectDate = () => {
	const dispatch = useAppDispatch();

	const { date } = useAppSelector((state) => state.dateReducer);

	const ChangeDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(dateSlise.actions.chenge(e.target.value));
	};

	return (
		<div className="FormSelectDate">
			<input
				type="date"
				pattern="\d{4}-\d{2}-\d{2}"
				value={date}
				onChange={ChangeDataHandler}
			/>
		</div>
	);
};
