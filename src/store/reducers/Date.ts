import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type dateState = {
  date: string
  dateInput: string
}

const today = new Date()
const initialState: dateState = {
  date: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()-1}`,
  dateInput: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()-1}`,
}

export const dateSlise = createSlice({
  name: 'date',
  initialState,
  reducers: {
    chengeInput(state, action: PayloadAction<string>) {
      state.dateInput = action.payload
    },
    setDate(state, action: PayloadAction<string>) {
      if(action.payload){
        state.date = action.payload
      }else{
        state.date = state.dateInput
      }
    },
  },
})

export const dateReducer = dateSlise.reducer
