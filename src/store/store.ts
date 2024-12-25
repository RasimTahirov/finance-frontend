import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../entities/user/auth/slice'
import categoryReducer from '../entities/category/slice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		category: categoryReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
