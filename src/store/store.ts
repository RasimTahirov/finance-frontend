import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../entities/user/auth/slice'
import categoryReducer from '../entities/category/slice'
import financeReducer from '../entities/finance/slice'
import balanceReducer from '../entities/finance/sliceBalance'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		category: categoryReducer,
		finance: financeReducer,
		balance: balanceReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
