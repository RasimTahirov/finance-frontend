import { Button, Form, Input, message, Modal } from 'antd'
import { useState } from 'react'
import { logout } from '../../../entities/user/auth/slice'
import { pageConfig } from '../../../config/pageConfig'
import { useNavigate } from 'react-router-dom'
import { categoryAll, categoryThunk } from '../../../entities/category/thunk'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../store/store'

const CategoryActions = () => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [form] = Form.useForm()

	const showModal = () => {
		setIsModalOpen(true)
	}

	const handleOk = () => {
		form.submit()
	}

	const handleCancel = () => {
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
			<Button className="buttonArrow" onClick={handleLogout}>
				Выйти
			</Button>
			<Button onClick={showModal}>Добавить категорию</Button>
			<Modal
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				cancelText="Отмена"
				okText="Добавить"
			>
				<Form form={form} onFinish={onSubmit}>
					<label className="font-exo2 text-base">
						Введите название категории
					</label>
					<Form.Item
						name="title"
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите название категории',
							},
						]}
					>
						<Input className="text-base" maxLength={20} showCount />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	)
}

export default CategoryActions
