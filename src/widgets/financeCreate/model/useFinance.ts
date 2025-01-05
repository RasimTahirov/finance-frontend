import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/store'
import { financeData } from '@/entities/finance/initialState'
import { categoryAll } from '@/features/category/api/thunks/thunk'
import { balanceThunk } from '@/features/balance/api/thunks/thunk'
import { financeAllThunk, financeCreateThunk, financeLastWeek } from '@/entities/finance/thunk'

const useFinance = () => {
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(categoryAll())
	}, [dispatch])

	const onSubmit = (data: financeData) => {
		if (data.type === 'Расход') {
			data.amount = -Math.abs(data.amount)
		} else {
			data.amount = Math.abs(data.amount)
		}

		dispatch(financeCreateThunk(data))
			.then(() => dispatch(financeAllThunk()))
			.then(() => dispatch(financeLastWeek()))
			.then(() => dispatch(balanceThunk()))
	}

	return { onSubmit }
}

export default useFinance
