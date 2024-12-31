import Popup from '../../../shared/ui/Modal/Modal'
import { Button, Form, Input, message } from 'antd'
import { useState } from 'react'
import { logout } from '../../../entities/user/auth/slice'
import { pageConfig } from '../../../config/pageConfig'
import { useNavigate } from 'react-router-dom'
import { categoryAll, categoryThunk } from '../../../entities/category/thunk'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'

const CategoryActions = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [form] = Form.useForm()
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const showModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const handleLogout = () => {
		dispatch(logout())
		navigate(pageConfig.auth)
	}

	const onSubmit = (data: { title: string }) => {
		dispatch(categoryThunk(data)).then(() => dispatch(categoryAll()))
		setIsModalOpen(false)
		message.success('Категория создана')
	}

	return (
		<div className="grid items-center">
			<Button onClick={handleLogout}>Выйти</Button>
			<Button onClick={showModal}>Добавить категорию</Button>
			<Popup isModalOpen={isModalOpen} closeModal={closeModal}>
				<Form form={form} onFinish={onSubmit}>
					<label className="text-lg">Введите название категории</label>
					<Form.Item
						className="w-80"
						name="title"
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите название категории',
							},
						]}
					>
						<Input maxLength={25} showCount />
					</Form.Item>
					<div className="flex justify-center">
						<Button htmlType="submit">Добавить категорию</Button>
					</div>
				</Form>
			</Popup>
		</div>
	)
}

export default CategoryActions
