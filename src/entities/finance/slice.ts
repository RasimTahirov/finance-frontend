import { createSlice } from '@reduxjs/toolkit'
import { financeAllThunk, financeCreateThunk } from './thunk'
import {initialState} from './initialState'

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
				state.success = true
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
	},
})

export default financeSlice.reducer