import React, { useEffect } from 'react'
import ReactLoading from 'react-loading';

import { useAppDispatch, useAppSelector } from '../hooks/redux'
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
  const { data, isError, isLoading } = useGetStatQuery(date)

  useEffect(() => {
    const today = new Date()
    dispatch(
      dateSlise.actions.setDate(
        `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate() - 1}`,
      ),
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

  if(isLoading){
    <div className='GeneralInformationForThePeriodCountri page'>
        <div className='Form'>
        </div>
        <div className='loading'>
          <ReactLoading color='#000000' />
        </div>
      </div>
  }

  if (isError) {
    return (
      <div className='GeneralInformation'>
        <div className='error'><h1>Немає даних на цю дату</h1></div>
      </div>
    )
  }

  return (
    <div className='GeneralInformation page'>
      <div className='Form'></div>
      <BarCharts />
    </div>
  )
}
