import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { FinanceType } from '../types/type'
import { AppDispatch, RootState } from '@/app/store'
import { financeLastWeek } from '@/entities/finance/api/thunks/thunk'

const useWeekFinance = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { finance, loading, error } = useSelector((state: RootState) => state.finance)

	useEffect(() => {
		dispatch(financeLastWeek())
	}, [dispatch])

	const financeDate: Record<string, FinanceType> = finance.reduce(
		(acc, fin) => {
			const day = String(new Date(fin.createdAt).getDate()).padStart(2, '0')
			const month = String(new Date(fin.createdAt).getMonth() + 1).padStart(2, '0')
			const date = `${day}.${month}`

			if (!acc[date]) {
				acc[date] = { Поступление: 0, Расход: 0 }
			}

			if (fin.amount > 0) {
				acc[date].Поступление += fin.amount
			} else {
				acc[date].Расход += Math.abs(fin.amount)
			}

			return acc
		},
		{} as Record<string, FinanceType>,
	)

	const data = Object.entries(financeDate)
		.map(([day, { Поступление, Расход }]) => ({
			name: day,
			Поступление,
			Расход,
		}))
		.reverse()

	return { data, finance, loading, error }
}

export default useWeekFinance
