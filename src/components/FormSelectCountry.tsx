import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { countrySlise } from "../store/reducers/Country";
import { useEffect } from "react";
import { statSlise } from "../store/reducers/stat";
import { useDebounce } from "use-debounce";

export const FormSelectCountry = () => {
	const dispatch = useAppDispatch();
	const { country } = useAppSelector((state) => state.countryReducer);
	const [value] = useDebounce(country, 500);

	const ChangeCountriHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(countrySlise.actions.chenge(e.target.value));
	};

	useEffect(() => {
		dispatch(statSlise.actions.statSelectCountry(country));
	}, [value]);

	return (
		<div className="FormSelectCountry">
			<input
				type="text"
				value={country}
				onChange={ChangeCountriHandler}
			/>
			<button
				onClick={() => {
					dispatch(statSlise.actions.statSelectCountry(country));
				}}
			>
				select
			</button>
		</div>
	);
};
