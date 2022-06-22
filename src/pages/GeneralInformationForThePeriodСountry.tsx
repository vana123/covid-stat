import React, { useEffect } from 'react'

import { FormSelectCountry } from '../components/FormSelectCountry'
import { FormSelectDate } from '../components/FormSelectdate'
import { Charts } from '../components/Charts'
import { BarCharts } from '../components/BarCharts'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { statFilterSlice } from '../store/reducers/StatFirlter'
import { useGetStatQuery } from '../service/statService'

export const GeneralInformationForThePeriodCountri: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { country } = useAppSelector((state) => state.countryReducer)
  const { date } = useAppSelector((state) => state.dateReducer)
  const { data } = useGetStatQuery(date)

  useEffect(() => {
    if (data) {
      dispatch(statFilterSlice.actions.setStatData(data))
      dispatch(statFilterSlice.actions.filterStatData({ data, country }))
    } else {
      dispatch(statFilterSlice.actions.setStatData([]))
    }
  }, [data, country])

  return (
    <div className='GeneralInformationForThePeriodCountri'>
      <div className='Form'>
        <FormSelectDate />
        <FormSelectCountry />
      </div>
      <Charts />
      <BarCharts />
    </div>
  )
}
