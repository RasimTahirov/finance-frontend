import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../store/store'
import { useEffect, useState } from 'react'
import { financeAllThunk, financeDelete } from '../../../entities/finance/thunk'
import { formatDate } from '../../../utils/formattedDate'
import PaginationHistory from './PaginationHistory'
import Popup from '../../../shared/ui/Modal/Modal'
import { Button } from 'antd'

const TabelHistory = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpenId, setIsModalOpenId] = useState<number | null>(null)

	const showModal = (id: number) => {
		setIsModalOpen(true)
		setIsModalOpenId(id)
		console.log(id)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const dispatch = useDispatch<AppDispatch>()
	const { finance } = useSelector((state: RootState) => state.finance)

	useEffect(() => {
		dispatch(financeAllThunk())
	}, [dispatch])

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
								// Пока так
								<>
									<tr
										key={fin.id}
										// Временно
										className="hover:active"
										onClick={() => showModal(fin.id)}
									>
										<th>{fin.category.title}</th>
										<th>{fin.title}</th>
										<th>{formatDate(fin.createdAt)}</th>
										<th>{fin.amount}₽</th>
										<th className="income">{fin.type}</th>
									</tr>

									{isModalOpenId === fin.id && (
										<Popup isModalOpen={isModalOpen} closeModal={closeModal}>
											<span>{fin.id}</span>
											<span>{fin.title}</span>
											<Button onClick={onDelete}>Удалить</Button>
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
