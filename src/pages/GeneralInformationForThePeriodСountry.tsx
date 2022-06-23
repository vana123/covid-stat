import React, { useEffect } from 'react'
import ReactLoading from 'react-loading';

import { FormSelectCountry } from '../components/FormSelectCountry'
import { FormSelectDate } from '../components/FormSelectdate'
import { BarCharts } from '../components/BarCharts'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { statFilterSlice } from '../store/reducers/StatFirlter'
import { useGetStatQuery } from '../service/statService'

export const GeneralInformationForThePeriodCountri: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { country } = useAppSelector((state) => state.countryReducer)
  const { date } = useAppSelector((state) => state.dateReducer)
  const { data, isError, isLoading } = useGetStatQuery(date)

  useEffect(() => {
    if (data) {
      dispatch(statFilterSlice.actions.setStatData(data))
      dispatch(statFilterSlice.actions.filterStatData({ data, country }))
    } else {
      dispatch(statFilterSlice.actions.setStatData([]))
    }
  }, [data, country])

  if(isLoading){
    <div className='GeneralInformationForThePeriodCountri page'>
        <div className='Form'>
          <FormSelectDate />
          <FormSelectCountry />
        </div>
        <div className='loading'>
          <ReactLoading color='#000000' />
        </div>
      </div>
  }

  if (isError) {
    return (
      <div className='GeneralInformationForThePeriodCountri page'>
        <div className='Form'>
          <FormSelectDate />
          <FormSelectCountry />
        </div>
        <div className='error'><h1>No data is available at this date</h1></div>
      </div>
    )
  }

  return (
    <div className='GeneralInformationForThePeriodCountri page'>
      <div className='Form'>
        <FormSelectDate />
        <FormSelectCountry />
      </div>
      
      <BarCharts />
    </div>
  )
}
