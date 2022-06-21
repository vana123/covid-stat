import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { countrySlise } from '../store/reducers/Country'
import { useDebounce } from 'use-debounce'

export const FormSelectCountry = () => {
  const dispatch = useAppDispatch()
  const { countryInput } = useAppSelector((state) => state.countryReducer)
  const [value] = useDebounce(countryInput, 500)

  const ChangeCountriHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(countrySlise.actions.inputChenge(e.target.value))
  }

  useEffect(() => {
    dispatch(countrySlise.actions.setCountry(countryInput))
  }, [value])

  return (
    <div className='FormSelectCountry'>
      <input type='text' value={countryInput} onChange={ChangeCountriHandler} placeholder={'🔎'} />
    </div>
  )
}
