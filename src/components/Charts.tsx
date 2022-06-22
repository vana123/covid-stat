import React from 'react'
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

import { useAppSelector } from '../hooks/redux'
import { item } from '../types/devextremeItem'

export const Charts: React.FC = (): JSX.Element => {
  const { statData } = useAppSelector((state) => state.statFilterReducer)

  const DataSource = statData.map((item) => {
    return {
      state: item.combinedKey,
      recovered: Number(item.recovered),
      deaths: Number(item.deaths),
      confirmed: Number(item.confirmed),
    }
  })

  return (
    <div className='Charts'>
      <Chart id='chart' title='Covid' dataSource={DataSource}>
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
        <Tooltip enabled={true} />
      </Chart>
    </div>
  )
}

function customizeItems(items: item[]) {
  const sortedItems: item[] = []
  items.forEach((item: item) => {
    const startIndex = item.series.stack === 'male' ? 0 : 3
    sortedItems.splice(startIndex, 0, item)
  })
  return sortedItems
}
