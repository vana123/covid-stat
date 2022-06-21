import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStat } from "../../types/stat";
import { uniqBy, includes, slice } from "lodash";

interface IstatFilter {
	statData: IStat[];
}

const initialState: IstatFilter = {
	statData: [],
};

export const statFilterSlice = createSlice({
	name: "statFilter",
	initialState,
	reducers: {
		setStatData(state, action: PayloadAction<IStat[]>) {
			state.statData = uniqBy(action.payload, "countryRegion");
		},
		filterStatData(
			state,
			action: PayloadAction<{ data: IStat[]; country: string }>
		) {
			state.statData = uniqBy(
				action.payload.data
					.filter((item) => {
						return item.countryRegion
							.toLowerCase()
							.includes(action.payload.country.toLowerCase());
					})
					.slice(0, 15),
				"countryRegion"
			);
		},
		SelectCountry(
			state,
			action: PayloadAction<{ data: IStat[]; countrys: string[] }>
		) {
			state.statData = uniqBy(
				action.payload.data.filter((item) => {
					return includes(
						action.payload.countrys,
						item.countryRegion
					);
				}),
				"countryRegion"
			);
		},
	},
});

export const statFilterReducer = statFilterSlice.reducer;
