import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dateState {
	country: string;
}

const initialState: dateState = {
	country: "",
};

export const countrySlise = createSlice({
	name: "country",
	initialState,
	reducers: {
		chenge(state, action: PayloadAction<string>) {
			state.country = action.payload;
		},
	},
});

export const countryReducer = countrySlise.reducer;
