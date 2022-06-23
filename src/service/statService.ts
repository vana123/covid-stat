import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { TStat } from '../types/stat'
import { apiUrl } from './../Constants/api'

export const statAPI = createApi({
  reducerPath: 'statAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  endpoints: (build) => ({
    getStat: build.query<TStat[], string>({
      query: (date) => ({
        url: `/daily/${date}`,
      }),
    }),
  }),
})

export const { useGetStatQuery } = statAPI
