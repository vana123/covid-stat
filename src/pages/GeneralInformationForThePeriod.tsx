import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { FormSelectDate } from '../components/FormSelectdate'
import { BarCharts } from '../components/BarCharts'
import { statFilterSlice } from '../store/reducers/StatFirlter'
import { useGetStatQuery } from '../service/statService'
import { COMBINED_KEY } from '../Constants/COUNTRIES'

export const GeneralInformationForThePeriod: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { country } = useAppSelector((state) => state.countryReducer)
  const { date } = useAppSelector((state) => state.dateReducer)
  const { isError, data } = useGetStatQuery(date)

  useEffect(() => {
    if (data) {
      dispatch(statFilterSlice.actions.SelectCountry({ data, countrys: COMBINED_KEY }))
    } else {
      dispatch(statFilterSlice.actions.setStatData([]))
    }
  }, [data, country])

  if (isError) {
    return (
      <div className='GeneralInformationForThePeriod'>
        <div className='Form'>
          <FormSelectDate />
        </div>
        <div className='error'><h1>Немає даних на цю дату</h1></div>
      </div>
    )
  }

  return (
    <div className='GeneralInformationForThePeriod page'>
      <div className='Form'>
        <FormSelectDate />
      </div>
      <BarCharts />
    </div>
  )
}
