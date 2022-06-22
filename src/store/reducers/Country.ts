import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type dateState = {
  countryInput: string
  country: string
}

const initialState: dateState = {
  country: '',
  countryInput: '',
}

export const countrySlise = createSlice({
  name: 'country',
  initialState,
  reducers: {
    inputChenge(state, action: PayloadAction<string>) {
      state.countryInput = action.payload
    },
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload
    },
  },
})

export const countryReducer = countrySlise.reducer
