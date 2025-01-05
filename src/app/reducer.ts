import { combineReducers } from '@reduxjs/toolkit'

import authReducer from '@/entities/user/auth/slice/slice'
import financeReducer from '@/entities/finance/api/slice/slice'
import balanceReducer from '@/features/balance/api/slice/slice'
import categoryReducer from '@/features/category/api/slice/slice'

export const rootReducer = combineReducers({
	auth: authReducer,
	category: categoryReducer,
	finance: financeReducer,
	balance: balanceReducer,
})
