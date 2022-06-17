import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dateState {
	date: string;
}

const initialState: dateState = {
	date: "2022-05-01",
};

export const dateSlise = createSlice({
	name: "date",
	initialState,
	reducers: {
		chenge(state, action: PayloadAction<string>) {
			state.date = action.payload;
		},
	},
});

export const dateReducer = dateSlise.reducer;
