import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '@/app/store'
import { categoryAll } from '@/features/category/api/thunks/thunk'
import { balanceThunk } from '@/features/balance/api/thunks/thunk'
import { IFinance } from '@/entities/finance/types/type'
import {
  financeAllThunk,
  financeCreateThunk,
  findExpensesLastMonth,
  findIncomeLastMonth,
} from '@/entities/finance/api/thunks/thunk'

const useFinance = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { currentPage } = useSelector((state: RootState) => state.history)

  useEffect(() => {
    dispatch(categoryAll())
  }, [dispatch])

  const onSubmit = async (data: IFinance) => {
    if (data.type === 'Расход') {
      data.amount = -Math.abs(data.amount)
    } else {
      data.amount = Math.abs(data.amount)
    }

    await dispatch(financeCreateThunk(data))
    await dispatch(financeAllThunk({ page: currentPage, limit: 10 }))
    await dispatch(balanceThunk())
    await dispatch(findIncomeLastMonth())
    await dispatch(findExpensesLastMonth())

    location.reload()
  }

  return { onSubmit }
}

export default useFinance
