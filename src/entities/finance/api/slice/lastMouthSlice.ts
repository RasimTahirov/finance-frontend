import { createSlice } from '@reduxjs/toolkit'

import { findExpensesLastMonth, findIncomeLastMonth } from '../thunks/thunk'
import { IIitialStateLastMouth } from '../../types/type'

const initialState: IIitialStateLastMouth = {
  income: { value: 0 },
  expenses: { value: 0 },
  error: null,
  loading: false,
}

const incomeExpensesSlice = createSlice({
  name: 'lastMouth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(findIncomeLastMonth.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(findIncomeLastMonth.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.income = action.payload
      })
      .addCase(findIncomeLastMonth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      .addCase(findExpensesLastMonth.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(findExpensesLastMonth.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.expenses = action.payload
      })
      .addCase(findExpensesLastMonth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default incomeExpensesSlice.reducer
