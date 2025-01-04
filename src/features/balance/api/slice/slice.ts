import { createSlice } from '@reduxjs/toolkit'
import { balanceThunk } from '../thunks/thunk'
import { initialState as initialStateData } from '../../types/type'

const initialState: initialStateData = {
	balance: 0,
	error: null,
	loading: false,
}

const balanceSlice = createSlice({
	name: 'balance',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(balanceThunk.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(balanceThunk.fulfilled, (state, action) => {
				state.balance = action.payload
				state.loading = false
				state.error = null
			})
			.addCase(balanceThunk.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	},
})

export default balanceSlice.reducer
