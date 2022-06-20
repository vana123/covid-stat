import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { dateSlise } from "../store/reducers/Date";
import { useDebounce } from "use-debounce";
import { useEffect } from "react";

export const FormSelectDate = () => {
	const dispatch = useAppDispatch();
	const { date, dateInput } = useAppSelector((state) => state.dateReducer);
	const [value] = useDebounce(dateInput, 500);

	useEffect(() => {
		dispatch(dateSlise.actions.setDate());
	}, [value]);

	const ChangeDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(dateSlise.actions.chengeInput(e.target.value));
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
