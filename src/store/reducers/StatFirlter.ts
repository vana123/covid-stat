import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStat } from "../../types/stat";

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
			state.statData = action.payload;
		},
		filterStatData(
			state,
			action: PayloadAction<{ data: IStat[]; country: string }>
		) {
			state.statData = action.payload.data
				.filter((item) => {
					return item.countryRegion
						.toLowerCase()
						.includes(action.payload.country.toLowerCase());
				})
				.slice(0, 15);
		},
	},
});

export const statFilterReducer = statFilterSlice.reducer;
