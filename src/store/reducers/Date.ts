import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type dateState = {
  date: string
  dateInput: string
}

const today = new Date()
const initialState: dateState = {
  date: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
  dateInput: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`,
}

export const dateSlise = createSlice({
  name: 'date',
  initialState,
  reducers: {
    chengeInput(state, action: PayloadAction<string>) {
      state.dateInput = action.payload
    },
    setDate(state) {
      state.date = state.dateInput
    },
  },
})

export const dateReducer = dateSlise.reducer
