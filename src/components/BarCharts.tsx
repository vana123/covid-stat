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

export const BarCharts = () => {
	const dispatch = useAppDispatch();
	const { date } = useAppSelector((state) => state.dateReducer);
	const { isError, isLoading, data } = useGetStatQuery(date);
	const { country } = useAppSelector((state) => state.countryReducer);
	const { statData } = useAppSelector((state) => state.statFilterReducer);

	const labels = statData.map((item) => {
		return item.countryRegion;
	});

	const dataChart = {
		labels,
		datasets: [
			{
				label: "confirmed",
				data: statData.map((item) => {
					return Number(item.confirmed);
				}),
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
			{
				label: "deaths",
				data: statData.map((item) => {
					return Number(item.deaths);
				}),
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "recovered",
				data: statData.map((item) => {
					return Number(item.recovered);
				}),
				backgroundColor: "rgba(53, 120, 100, 0.5)",
			},
		],
	};

	return <Bar options={options} data={dataChart} />;
};
