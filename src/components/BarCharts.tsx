import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import { useEffect } from "react";
import { IStat } from "../types/stat";
import { useGetStatQuery } from "../service/statService";
import { statFilterSlice } from "../store/reducers/StatFirlter";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top" as const,
		},
		title: {
			display: true,
			text: "Covid",
		},
	},
};

function filterCountru(arr: IStat[], country: string) {
	return arr.filter((item) => {
		return item.countryRegion.toLowerCase().includes(country.toLowerCase());
	});
}

export const BarCharts = () => {
	const dispatch = useAppDispatch();
	const { date } = useAppSelector((state) => state.dateReducer);
	const { isError, isLoading, data } = useGetStatQuery(date);
	const { country } = useAppSelector((state) => state.countryReducer);
	let dataFiltre = data ? filterCountru(data, country).slice(0, 15) : [];

	useEffect(() => {
		if (data) {
			dataFiltre = filterCountru(data, country).slice(0, 15);
			dispatch(statFilterSlice.actions.setStatData(data));
			dispatch(statFilterSlice.actions.filterStatData({ data, country }));
		} else {
			dataFiltre = [];
			dispatch(statFilterSlice.actions.setStatData([]));
		}
	}, [data, country]);

	const labels = dataFiltre.map((item) => {
		return item.countryRegion;
	});

	const dataChart = {
		labels,
		datasets: [
			{
				label: "confirmed",
				data: dataFiltre.map((item) => {
					return Number(item.confirmed);
				}),
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
			{
				label: "deaths",
				data: dataFiltre.map((item) => {
					return Number(item.deaths);
				}),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "recovered",
				data: dataFiltre.map((item) => {
					return Number(item.recovered);
				}),
				backgroundColor: "rgba(53, 120, 100, 0.5)",
			},
		],
	};

	return <Bar options={options} data={dataChart} />;
};
