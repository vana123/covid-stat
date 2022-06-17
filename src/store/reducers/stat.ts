import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStat } from "../../types/stat";

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
			state.dataFiltre = actions.payload.splice(0, 10);
		},
		statFetchingError(state, actions: PayloadAction<string>) {
			state.isLoading = false;
			state.error = actions.payload;
		},
		statSelectCountry(state, action: PayloadAction<string>) {
			state.data = state.data.filter((item) => {
				return item.countryRegion
					.toLocaleLowerCase()
					.includes(action.payload.toLowerCase());
			});
		},
	},
});

export const statReducer = statSlise.reducer;
