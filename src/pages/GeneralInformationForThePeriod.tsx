import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { FormSelectDate } from '../components/FormSelectdate'
import { Charts } from '../components/Charts'
import { BarCharts } from '../components/BarCharts'
import { statFilterSlice } from '../store/reducers/StatFirlter'
import { useGetStatQuery } from '../service/statService'
import { COMBINEDKEY } from '../Constants/COUNTRIES'

export const GeneralInformationForThePeriod: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { country } = useAppSelector((state) => state.countryReducer)
  const { date } = useAppSelector((state) => state.dateReducer)
  const { data } = useGetStatQuery(date)

  useEffect(() => {
    if (data) {
      dispatch(statFilterSlice.actions.SelectCountry({ data, countrys: COMBINEDKEY }))
    } else {
      dispatch(statFilterSlice.actions.setStatData([]))
    }
  }, [data, country])

  return (
    <div className='GeneralInformationForThePeriod'>
      <div className='Form'>
        <FormSelectDate />
      </div>
      <Charts />
      <BarCharts />
    </div>
  )
}
