import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useModal from '@/shared/hooks/useModal'
import { AppDispatch } from '@/app/store'
import { logout } from '@/entities/user/auth/slice/slice'
import { pageConfig } from '@/shared/config/pageConfig'
import { categoryAll, categoryThunk } from '@/features/category/api/thunks/thunk'
import Popup from '@/shared/ui/Modal/Modal'

const CategoryActions = () => {
	const { isModalOpen, closeModal, showModal } = useModal()
	const [form] = Form.useForm()
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const handleLogout = () => {
		dispatch(logout())
		navigate(pageConfig.auth)
	}

	const onSubmit = (data: { title: string }) => {
		dispatch(categoryThunk(data)).then(() => dispatch(categoryAll()))
		closeModal()
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
