import React, { useEffect } from 'react'
import { useDebounce } from 'use-debounce'

import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { countrySlise } from '../store/reducers/Country'

export const FormSelectCountry: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const { countryInput } = useAppSelector((state) => state.countryReducer)
  const [value] = useDebounce(countryInput, 500)

  const handleChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(countrySlise.actions.inputChenge(e.target.value))
  }

  useEffect(() => {
    dispatch(countrySlise.actions.setCountry(countryInput))
  }, [value])

  return (
    <div className='FormSelectCountry'>
      <input type='text' value={countryInput} onChange={handleChangeCountry} placeholder={'🔎'} />
    </div>
  )
}
