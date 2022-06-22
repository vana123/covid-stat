import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TStat } from '../../types/stat'


type TstatFilter = {
  statData: TStat[]
}

const initialState: TstatFilter = {
  statData: [],
}

export const statFilterSlice = createSlice({
  name: 'statFilter',
  initialState,
  reducers: {
    setStatData(state, action: PayloadAction<TStat[]>) {
      state.statData = action.payload
    },
    filterStatData(state, action: PayloadAction<{ data: TStat[]; country: string }>) {
      state.statData = action.payload.data
        .filter((item) => {
          return item.combinedKey.toLowerCase().includes(action.payload.country.toLowerCase())
        })
        .slice(0, 15)
    },
    SelectCountry(state, action: PayloadAction<{ data: TStat[]; countrys: string[] }>) {
      state.statData = action.payload.data.filter((item) => {
        return action.payload.countrys.includes(item.combinedKey)
      })
    },
  },
})

export const statFilterReducer = statFilterSlice.reducer
