import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import { useEffect, useState } from 'react'
import { financeAllThunk, financeDelete } from '../../../entities/finance/thunk'
import { formatDate } from '../../../utils/formattedDate'
import { Button } from 'antd'
import PaginationHistory from './PaginationHistory'
import Popup from '../../../shared/ui/Modal/Modal'

const TabelHistory = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpenId, setIsModalOpenId] = useState<number | null>(null)
	const dispatch = useDispatch<AppDispatch>()
	const { finance } = useSelector((state: RootState) => state.finance)

	useEffect(() => {
		dispatch(financeAllThunk())
	}, [dispatch])

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
				dispatch(financeAllThunk()),
			)
		}
		setIsModalOpen(false)
		setIsModalOpenId(null)
	}

	return (
		<>
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

					<tbody className="cursor-pointer">
						{Array.isArray(finance) &&
							finance.map((fin) => (
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
											<div className="grid text-lg px-5 w-80">
												<span>Транзакция от {formatDate(fin.createdAt)}</span>
												<div className="flex justify-between">
													<span>{fin.category.title}</span>
													<span>{fin.title}</span>
												</div>
												<div className="flex justify-between">
													<span></span>
													<span className="font-semibold">{fin.amount}₽</span>
												</div>
												<Button onClick={onDelete}>Удалить транзакцию</Button>
											</div>
										</Popup>
									)}
								</>
							))}
					</tbody>
				</table>
				<PaginationHistory />
			</div>
		</>
	)
}

export default TabelHistory
