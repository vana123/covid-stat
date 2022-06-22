import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Charts } from '../components/Charts'
import { BarCharts } from '../components/BarCharts'
import { countrySlise } from '../store/reducers/Country'
import { dateSlise } from '../store/reducers/Date'
import { statFilterSlice } from '../store/reducers/StatFirlter'
import { useGetStatQuery } from '../service/statService'
import { COMBINED_KEY } from '../Constants/COUNTRIES'

export const GeneralInformation: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { country } = useAppSelector((state) => state.countryReducer)
  const { date } = useAppSelector((state) => state.dateReducer)
  const { data } = useGetStatQuery(date)

  useEffect(() => {
    const today = new Date()
    dispatch(
      dateSlise.actions.chengeInput(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()-1}`),
    )
    dispatch(countrySlise.actions.setCountry(''))
  }, [])

  useEffect(() => {
    if (data) {
      dispatch(statFilterSlice.actions.SelectCountry({ data, countrys: COMBINED_KEY }))
    } else {
      dispatch(statFilterSlice.actions.setStatData([]))
    }
  }, [data, country])

  return (
    <div className='GeneralInformation'>
      <Charts />
      <BarCharts />
    </div>
  )
}
