import { combineReducers } from '@reduxjs/toolkit'

import authReducer from '@/entities/user/auth/slice/slice'
import financeReducer from '@/entities/finance/api/slice/financeSlice'
import balanceReducer from '@/features/balance/api/slice/slice'
import categoryReducer from '@/features/category/api/slice/slice'
import incomeExpensesReducer from '@/entities/finance/api/slice/lastMouthSlice'
import historyFinanceReducer from '@/entities/finance/api/slice/historySlice'

export const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  finance: financeReducer,
  balance: balanceReducer,
  incomeExpenses: incomeExpensesReducer,
  history: historyFinanceReducer,
})
