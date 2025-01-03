import { createSlice } from '@reduxjs/toolkit'
import { financeTotal } from './thunk'

const balanceSlice = createSlice({
	name: 'balance',
	initialState: {
		balance: 0,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(financeTotal.fulfilled, (state, action) => {
			state.balance = action.payload
		})
	},
})

export default balanceSlice.reducer
