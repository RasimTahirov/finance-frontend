import style from '../index.module.scss'
import Popup from '../../../shared/ui/Modal/Modal'
import { XCircleIcon } from '@heroicons/react/16/solid'
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { AppDispatch, RootState } from '../../../store/store'
import { useDispatch, useSelector } from 'react-redux'
import { categoryAll, deleteCategory } from '../../../entities/category/thunk'

const CategoryList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpenId, setIsModalOpenId] = useState<number | null>(null)
	const { category } = useSelector((state: RootState) => state.category)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(categoryAll())
	}, [dispatch])

	const showModalCategory = (id: number) => {
		setIsModalOpen(true)
		setIsModalOpenId(id)
	}

	const closeModal = () => {
		setIsModalOpen(false)
		setIsModalOpenId(null)
	}

	const handleDeleteCategory = () => {
		if (isModalOpenId !== null) {
			dispatch(deleteCategory(isModalOpenId)).then(() =>
				dispatch(categoryAll()),
			)
			setIsModalOpen(false)
			setIsModalOpenId(null)
		}
	}

	return (
		<div>
			<span>Мои категории</span>
			<ul className="flex flex-wrap gap-2 w-4/5">
				{Array.isArray(category) &&
					category?.map((categories) => (
						<li key={categories.id}>
							<div
								className={style.category}
								onClick={() => showModalCategory(categories.id)}
							>
								<span className={style.title}>{categories.title}</span>
								<div className={style.delete}>
									<XCircleIcon className="w-5" />
								</div>
							</div>
							<Popup isModalOpen={isModalOpen} closeModal={closeModal}>
								<div className="p-5 grid">
									<label className="text-lg mb-2.5">
										Хотите удалить категорию?
									</label>
									<div className="flex justify-between">
										<Button onClick={closeModal}>Отмена</Button>
										<Button onClick={handleDeleteCategory}>Удалить</Button>
									</div>
								</div>
							</Popup>
						</li>
					))}
			</ul>
		</div>
	)
}

export default CategoryList
