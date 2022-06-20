import React from "react";
import { useAppSelector } from "../hooks/redux";
import {
	Chart,
	Series,
	CommonSeriesSettings,
	Legend,
	ValueAxis,
	Title,
	Export,
	Tooltip,
	Border,
} from "devextreme-react/chart";
import { useGetStatQuery } from "../service/statService";
import { useEffect } from "react";
import { IStat } from "../types/stat";

function filterCountru(arr: IStat[], country: string) {
	return arr.filter((item) => {
		return item.countryRegion.toLowerCase().includes(country.toLowerCase());
	});
}

export const Charts = () => {
	const { date } = useAppSelector((state) => state.dateReducer);
	const { isError, isLoading, data } = useGetStatQuery(date);
	const { country } = useAppSelector((state) => state.countryReducer);
	let dataFiltre = data ? filterCountru(data, country) : [];

	useEffect(() => {
		if (data) {
			dataFiltre = filterCountru(data, country);
		} else {
			dataFiltre = [];
		}
	}, [data, country]);

	const dataSource = dataFiltre
		.map((item) => {
			return {
				state: item.countryRegion,
				recovered: Number(item.recovered),
				deaths: Number(item.deaths),
				confirmed: Number(item.confirmed),
			};
		})
		.slice(0, 15);
	console.log(dataSource);
	return (
		<div className="Charts">
			<Chart id="chart" title="Covid" dataSource={dataSource}>
				<CommonSeriesSettings argumentField="state" type="stackedBar" />
				<Series
					valueField="deaths"
					name="Deaths"
					stack="male"
					color={"red"}
				/>
				<Series
					valueField="confirmed"
					name="Confirmed"
					stack="male"
					color={"blue"}
				/>
				<Series
					valueField="recovered"
					name="Recovered"
					stack="male"
					color={"green"}
				/>
				<ValueAxis>
					<Title text="Covid" />
				</ValueAxis>
				<Legend
					position="inside"
					columnCount={2}
					customizeItems={customizeItems}
					horizontalAlignment="right"
				>
					<Border visible={true} />
				</Legend>
				{/* <Export enabled={true} /> */}
				<Tooltip enabled={true} />
			</Chart>
		</div>
	);
};

function customizeItems(items: any) {
	const sortedItems: any = [];

	items.forEach((item: any) => {
		const startIndex = item.series.stack === "male" ? 0 : 3;
		sortedItems.splice(startIndex, 0, item);
	});
	return sortedItems;
}
