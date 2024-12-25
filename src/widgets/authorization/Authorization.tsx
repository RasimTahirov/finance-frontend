import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { pageConfig } from '../../config/pageConfig'
import { useDispatch } from 'react-redux'
import { authThunk } from '../../entities/user/auth/thunk'
import { UserData } from '../../entities/user/model/type'
import { AppDispatch } from '../../store/store'
import { motion } from 'framer-motion'

const Authorization = () => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const onSubmit = async (data: UserData) => {
		const res = await dispatch(authThunk(data))
		if (authThunk.fulfilled.match(res)) {
			localStorage.setItem('email', JSON.stringify(res.payload.email))
			localStorage.setItem('name', JSON.stringify(res.payload.name))
			navigate(pageConfig.home)
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.2 }}
			className="container grid h-screen"
		>
			<div className="card mx-auto self-center w-1/4">
				<div className="flex justify-center mb-5">
					<h3 className="text-3xl font-semibold">Авторизация</h3>
				</div>
				<Form className="grid" onFinish={onSubmit}>
					<Form.Item
						name="email"
						rules={[
							{
								type: 'email',
								message: 'Введён некорректный адрес электронной почты',
							},
							{
								required: true,
								message: 'Пожалуйста, введите адрес электронной почты',
							},
						]}
					>
						<Input placeholder="Почта" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите пароль',
							},
						]}
					>
						<Input.Password placeholder="Пароль" />
					</Form.Item>
					<div className="flex justify-center mt-2.5">
						<Button className="text-base" htmlType="submit">
							Войти
						</Button>
					</div>
					<div className="flex justify-center mt-2.5 gap-2.5 text-white">
						<span>Не зарегистрированы?</span>
						<Link to={pageConfig.register}>Зарегистрироваться</Link>
					</div>
				</Form>
			</div>
		</motion.div>
	)
}

export default Authorization
