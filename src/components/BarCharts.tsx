import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'
import { useAppSelector } from '../hooks/redux'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      
    },
  },
}

export const BarCharts: React.FC = (): JSX.Element => {
  const { statData } = useAppSelector((state) => state.statFilterReducer)

  const labels = statData.map((item) => {
    return item.combinedKey
  })

  const DataChart = {
    labels,
    datasets: [
      {
        label: 'confirmed',
        data: statData.map((item) => {
          return Number(item.confirmed)
        }),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'deaths',
        data: statData.map((item) => {
          return Number(item.deaths)
        }),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'recovered',
        data: statData.map((item) => {
          return Number(item.recovered)
        }),
        backgroundColor: 'rgba(53, 120, 100, 0.5)',
      },
    ],
  }

  return (
    <div className="chart">
      <Bar options={OPTIONS} data={DataChart} />
    </div>
  )
}
