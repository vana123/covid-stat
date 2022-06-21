import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface dateState {
  date: string
  dateInput: string
}

const initialState: dateState = {
  date: '2022-05-01',
  dateInput: '2022-05-01',
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
