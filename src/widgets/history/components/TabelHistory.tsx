import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import { useEffect } from 'react'
import { financeAllThunk } from '../../../entities/finance/thunk'
import { formatDate } from '../../../utils/formattedDate'
import PaginationHistory from './PaginationHistory'

const TabelHistory = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { finance } = useSelector((state: RootState) => state.finance)

	useEffect(() => {
		dispatch(financeAllThunk())
	}, [dispatch])

	return (
		<div className="card">
			<table className="w-full mb-2.5">
				<thead className="">
					<tr className="">
						<th>Категория</th>
						<th>Название</th>
						<th>Дата</th>
						<th>Сумма</th>
						<th>Статус</th>
					</tr>
				</thead>

				<tbody>
					{Array.isArray(finance) && finance.map((fin) => (
						<tr key={fin.id}>
							<th>{fin.category.title}</th>
							<th>{fin.title}</th>
							<th>{formatDate(fin.createdAt)}</th>
							<th>{fin.amount}₽</th>
							<th className="income">{fin.type}</th>
						</tr>
					))}
				</tbody>
			</table>
      <PaginationHistory />
		</div>
	)
}

export default TabelHistory
