import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStat } from "../../types/stat";
import { useAppSelector } from "../../hooks/redux";

interface statState {
	data: IStat[];
	dataFiltre: IStat[];
	isLoading: boolean;
	error: string;
}

const initialState: statState = {
	data: [],
	dataFiltre: [],
	isLoading: true,
	error: "",
};

export const statSlise = createSlice({
	name: "stat",
	initialState,
	reducers: {
		statFetching(state) {
			state.isLoading = true;
		},
		statFetchingSuccess(state, actions: PayloadAction<IStat[]>) {
			state.isLoading = false;
			state.error = "";
			state.data = actions.payload;
		},
		statFetchingError(state, actions: PayloadAction<string>) {
			state.isLoading = false;
			state.error = actions.payload;
		},
		statSelectCountry(state, action: PayloadAction<string>) {
			state.dataFiltre = state.data.filter((item) => {
				return item.countryRegion
					.toLocaleLowerCase()
					.includes(action.payload.toLowerCase());
			});
		},
	},
});

export const statReducer = statSlise.reducer;
