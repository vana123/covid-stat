import React, { useEffect } from 'react'
import { useDebounce } from 'use-debounce'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { dateSlise } from '../store/reducers/Date'

export const FormSelectDate: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { date, dateInput } = useAppSelector((state) => state.dateReducer)
  const [value] = useDebounce(dateInput, 500)

  useEffect(() => {
    dispatch(dateSlise.actions.setDate(''))
  }, [value])

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(dateSlise.actions.chengeInput(e.target.value))
  }

  return (
    <div className='Form__SelectDate'>
      <input type='date' pattern='\d{4}-\d{2}-\d{2}' value={date} onChange={handleChangeDate} />
    </div>
  )
}
