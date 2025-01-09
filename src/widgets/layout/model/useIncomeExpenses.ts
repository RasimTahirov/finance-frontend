import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store'
import { findExpensesLastMonth, findIncomeLastMonth } from '@/entities/finance/api/thunks/thunk'

const useIncomeExpenses = () => {
  const { income, expenses } = useSelector((state: RootState) => state.incomeExpenses)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(findIncomeLastMonth())
    dispatch(findExpensesLastMonth())
  }, [dispatch])

  const expensesData = Math.abs(expenses.value)

  const data = [
    { name: 'Доход', value: income.value },
    { name: 'Расход', value: expensesData },
  ]

  const color = ['#6359e9', '#64cff6']

  return { data, color }
}

export default useIncomeExpenses
