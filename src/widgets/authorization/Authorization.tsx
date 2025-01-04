import { pageConfig } from '@/shared/config/pageConfig'
import { Input, Button, Form } from 'antd'
import { motion } from 'framer-motion'
import useAuth from './model/useAuth'
import { Link } from 'react-router-dom'

const Authorization = () => {
	const { onSubmit } = useAuth()

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
