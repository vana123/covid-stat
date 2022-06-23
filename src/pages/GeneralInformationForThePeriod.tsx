import React, { useEffect } from 'react'
import ReactLoading from 'react-loading';

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
  const { isError, data, isLoading } = useGetStatQuery(date)

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
          <FormSelectDate />
        </div>
        <div className='loading'>
          <ReactLoading color='#000000' />
        </div>
      </div>
  }

  if (isError) {
    return (
      <div className='GeneralInformationForThePeriod page'>
        <div className='Form'>
          <FormSelectDate />
        </div>
        <div className='error'>
          <div>
          <h1>No data is available at this date</h1>
          </div>
        </div>
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
