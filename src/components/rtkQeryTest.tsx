import React from "react";
import { useGetStatQuery } from "../service/statService";
import { useAppSelector } from "../hooks/redux";

export const RtkQetyTest = () => {
	const { date } = useAppSelector((state) => state.dateReducer);
	const { isError, isLoading, data } = useGetStatQuery(date);

	if (isLoading) {
		return <div className="test">Loading...</div>;
	}
	return <div className="test">{JSON.stringify(data)}</div>;
};
