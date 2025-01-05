import { createSlice } from '@reduxjs/toolkit'

import { initialStateData } from '../../types/type'
import { financeAllThunk, financeCreateThunk, financeLastWeek } from '../thunks/thunk'

const initialState: initialStateData = {
	finance: [],
	error: null,
	loading: false,
}

const financeSlice = createSlice({
	name: 'finance',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(financeCreateThunk.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(financeCreateThunk.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				state.finance = action.payload
			})
			.addCase(financeCreateThunk.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})

			.addCase(financeAllThunk.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(financeAllThunk.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				state.finance = action.payload
			})
			.addCase(financeAllThunk.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})

			.addCase(financeLastWeek.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(financeLastWeek.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				state.finance = action.payload
			})
			.addCase(financeLastWeek.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	},
})

export default financeSlice.reducer
