import axios from "axios";
import { AppDispatch } from "../store";
import { statSlise } from "./stat";
import { IStat } from "../../types/stat";

export const fetchStat =
	(endPoint: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(statSlise.actions.statFetching);
			const responce = axios.get<IStat[]>(
				`https://covid19.mathdro.id/api/${endPoint}`
			);
			dispatch(
				statSlise.actions.statFetchingSuccess((await responce).data)
			);
			console.log((await responce).data);
		} catch (e) {
			dispatch(statSlise.actions.statFetchingError(String(e)));
		}
	};
