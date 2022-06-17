import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { statReducer } from "./reducers/stat";
import { dateReducer } from "./reducers/Date";
import { countryReducer } from "./reducers/Country";

const rootReducer = combineReducers({
	statReducer,
	dateReducer,
	countryReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
