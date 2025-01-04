import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { balanceThunk } from '../api/thunks/thunk'
import { AppDispatch, RootState } from '@/app/store'

const useBalance = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { balance, loading, error } = useSelector((state: RootState) => state.balance)

	useEffect(() => {
		dispatch(balanceThunk())
	}, [dispatch])

	return { balance, loading, error }
}

export default useBalance
