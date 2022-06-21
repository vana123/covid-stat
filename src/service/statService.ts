import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IStat } from '../types/stat'

export const statAPI = createApi({
  reducerPath: 'statAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://covid19.mathdro.id/api',
  }),
  endpoints: (build) => ({
    getStat: build.query<IStat[], string>({
      query: (date) => ({
        url: `/daily/${date}`,
      }),
    }),
  }),
})

export const { useGetStatQuery } = statAPI
