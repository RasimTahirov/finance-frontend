import { createSlice } from '@reduxjs/toolkit'

import { financeAllThunk } from '../thunks/thunk'
import { IInitialStateHistory } from '../../types/type'

const initialState: IInitialStateHistory = {
  finance: [],
  totalPage: 0,
  total: 0,
  currentPage: 1,
  error: null,
  loading: false,
}

const historyFinanceSlice = createSlice({
  name: 'history',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(financeAllThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(financeAllThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.currentPage = action.payload.currentPage
        state.finance = action.payload.finance
        state.total = action.payload.total
        state.totalPage = action.payload.totalPage
      })
      .addCase(financeAllThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default historyFinanceSlice.reducer
