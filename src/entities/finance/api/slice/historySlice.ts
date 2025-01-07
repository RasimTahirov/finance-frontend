import { createSlice } from '@reduxjs/toolkit'
import { financeAllThunk } from '../thunks/thunk'

interface IFinance {
	id: number
	title: string
	amount: number
	type: string
	createdAt: string
	category: {
		id: number
		title: string
	}
}

interface initialStateData {
	finance: IFinance[]
	totalPage: number
	total: number
	currentPage: number
	error: null | string
	loading: boolean
}

const initialState: initialStateData = {
	finance: [],
	totalPage: 0,
	total: 0,
	currentPage: 1,
	error: null,
	loading: false,
}

const historyFinanceSlice = createSlice({
	name: 'historyFinanceSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(financeAllThunk.pending, (state) => {
				state.loading = true
			})
			.addCase(financeAllThunk.fulfilled, (state, action) => {
				;(state.loading = false),
					(state.error = null),
					(state.currentPage = action.payload.currentPage),
					(state.finance = action.payload.finance),
					(state.total = action.payload.total),
					(state.totalPage = action.payload.totalPage)
			})
			.addCase(financeAllThunk.rejected, (state, action) => {
				;(state.loading = false), (state.error = action.payload as string)
			})
	},
})

export default historyFinanceSlice.reducer
