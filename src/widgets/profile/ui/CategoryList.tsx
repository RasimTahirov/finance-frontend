import { AppDispatch, RootState } from '@/app/store'
import { categoryAll, deleteCategory } from '@/features/category/api/thunks/thunk'
import Popup from '@/shared/ui/Modal/Modal'
import { Button, Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CategoryList = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isModalOpenId, setIsModalOpenId] = useState<number | null>(null)
	const { category, error, loading } = useSelector((state: RootState) => state.category)
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
			dispatch(deleteCategory(isModalOpenId)).then(() => dispatch(categoryAll()))
			setIsModalOpen(false)
			setIsModalOpenId(null)
		}
	}

	if (error) {
		return <div>{error}</div>
	}

	return (
		<div>
			<span>Мои категории</span>
			<ul className="flex flex-wrap gap-2 w-4/5">
				{Array.isArray(category) &&
					category?.map((categories) => (
						<li key={categories.id}>
							{loading ? (
								<Skeleton.Button active />
							) : (
								<div className="category" onClick={() => showModalCategory(categories.id)}>
									<span className="category-text">{categories.title}</span>
									<span className="delete-text">Удалить</span>
								</div>
							)}
							<Popup isModalOpen={isModalOpen} closeModal={closeModal}>
								<div className="grid">
									<label className="text-lg mb-2.5">Хотите удалить категорию?</label>
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
