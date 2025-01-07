import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Button } from 'antd'

import { AppDispatch, RootState } from '@/app/store'
import { balanceThunk } from '@/features/balance/api/thunks/thunk'
import { formatDate } from '@/utils/formattedDate'
import {
	financeAllThunk,
	financeDelete,
	findExpensesLastMonth,
	findIncomeLastMonth,
} from '@/entities/finance/api/thunks/thunk'
import PaginationHistory from './PaginationHistory'
import Popup from '@/shared/ui/Modal/Modal'

const TabelHistory = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpenId, setIsModalOpenId] = useState<number | null>(null)
	const { finance, currentPage, total, totalPage } = useSelector(
		(state: RootState) => state.history,
	)
	const dispatch = useDispatch<AppDispatch>()

	const handlePage = (page: number) => {
		dispatch(financeAllThunk({ page, limit: 10 }))
	}

	useEffect(() => {
		dispatch(financeAllThunk({ page: currentPage, limit: 10 }))
	}, [dispatch, currentPage])

	const showModal = (id: number) => {
		setIsModalOpen(true)
		setIsModalOpenId(id)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const onDelete = () => {
		if (isModalOpenId !== null) {
			dispatch(financeDelete(isModalOpenId)).then(() =>
				dispatch(financeAllThunk({ page: currentPage, limit: 10 }))
					.then(() => dispatch(balanceThunk()))
					.then(() => dispatch(findExpensesLastMonth()))
					.then(() => dispatch(findIncomeLastMonth())),
			)
		}
		setIsModalOpen(false)
		setIsModalOpenId(null)
	}

	return (
		<>
			<div className="card">
				<table className="w-full mb-2.5">
					<thead>
						<tr>
							<th>Категория</th>
							<th>Название</th>
							<th>Дата</th>
							<th>Сумма</th>
							<th>Статус</th>
						</tr>
					</thead>

					<tbody className="cursor-pointer">
						{Array.isArray(finance) &&
							finance
								.filter((fin) => fin.category && fin.category.title)
								.map((fin) => (
									<>
										<tr
											key={fin.id}
											onClick={() => showModal(fin.id)}
											className="hover:opacity-60 transition-opacity duration-300 ease-in-out"
										>
											<th>{fin.category.title}</th>
											<th>{fin.title}</th>
											<th>{formatDate(fin.createdAt)}</th>
											<th>{fin.amount}₽</th>
											<th>{fin.type}</th>
										</tr>

										{isModalOpenId === fin.id && (
											<Popup isModalOpen={isModalOpen} closeModal={closeModal}>
												<div className="grid w-80">
													<span className="mb-5">Транзакция от {formatDate(fin.createdAt)}</span>
													<div className="flex justify-between leading-5 mb-5">
														<div className="grid">
															<span className="font-semibold">Категория</span>
															<span className="flex justify-start">{fin.category.title}</span>
														</div>
														<div className="grid">
															<span className="font-semibold">Название</span>
															<span className="flex justify-end">{fin.title}</span>
														</div>
													</div>
													<span
														className="flex justify-end font-semibold"
														style={{ color: fin.amount < 0 ? '#cf2929' : '#4c9e3f' }}
													>
														{fin.amount}₽
													</span>
													<Button onClick={onDelete}>Удалить транзакцию</Button>
												</div>
											</Popup>
										)}
									</>
								))}
					</tbody>
				</table>
				<PaginationHistory
					onChangePage={handlePage}
					currentPage={currentPage}
					totalPage={totalPage}
				/>
			</div>
		</>
	)
}

export default TabelHistory
