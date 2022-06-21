import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { Charts } from '../components/Charts'
import { countrySlise } from '../store/reducers/Country'
import { dateSlise } from '../store/reducers/Date'
import { BarCharts } from '../components/BarCharts'
import { statFilterSlice } from '../store/reducers/StatFirlter'
import { useGetStatQuery } from '../service/statService'

export const GeneralInformation = () => {
  const dispatch = useAppDispatch()
  const { country } = useAppSelector((state) => state.countryReducer)
  const { date } = useAppSelector((state) => state.dateReducer)
  const { data } = useGetStatQuery(date)

  useEffect(() => {
    const today = new Date()
    dispatch(
      dateSlise.actions.chengeInput(`${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`),
    )
    dispatch(countrySlise.actions.setCountry(''))
  }, [])

  useEffect(() => {
    if (data) {
      const countrys = ['Ukraine', 'Poland', 'United Kingdom', 'Estonia']
      dispatch(statFilterSlice.actions.SelectCountry({ data, countrys }))
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
