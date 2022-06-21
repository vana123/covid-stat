import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { dateReducer } from "./reducers/Date";
import { countryReducer } from "./reducers/Country";
import { statAPI } from "../service/statService";
import { statFilterReducer } from "./reducers/StatFirlter";

const rootReducer = combineReducers({
	dateReducer,
	countryReducer,
	statFilterReducer,
	[statAPI.reducerPath]: statAPI.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,

		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(statAPI.middleware),
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
