import React from 'react'
import { useAppSelector } from '../hooks/redux'
import {
  Chart,
  Series,
  CommonSeriesSettings,
  Legend,
  ValueAxis,
  Title,
  Tooltip,
  Border,
} from 'devextreme-react/chart'

export const Charts = () => {
  const { statData } = useAppSelector((state) => state.statFilterReducer)

  const dataSource = statData.map((item) => {
    return {
      state: item.countryRegion,
      recovered: Number(item.recovered),
      deaths: Number(item.deaths),
      confirmed: Number(item.confirmed),
    }
  })

  return (
    <div className='Charts'>
      <Chart id='chart' title='Covid' dataSource={dataSource}>
        <CommonSeriesSettings argumentField='state' type='stackedBar' />
        <Series valueField='deaths' name='Deaths' stack='male' color={'red'} />
        <Series valueField='confirmed' name='Confirmed' stack='male' color={'blue'} />
        <Series valueField='recovered' name='Recovered' stack='male' color={'green'} />
        <ValueAxis>
          <Title text='Covid' />
        </ValueAxis>
        <Legend
          position='inside'
          columnCount={2}
          customizeItems={customizeItems}
          horizontalAlignment='right'
        >
          <Border visible={true} />
        </Legend>
        {/* <Export enabled={true} /> */}
        <Tooltip enabled={true} />
      </Chart>
    </div>
  )
}

function customizeItems(items: any) {
  const sortedItems: any = []

  items.forEach((item: any) => {
    const startIndex = item.series.stack === 'male' ? 0 : 3
    sortedItems.splice(startIndex, 0, item)
  })
  return sortedItems
}
