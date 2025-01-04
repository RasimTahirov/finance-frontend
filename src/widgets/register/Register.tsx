import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import { motion } from 'framer-motion'
import useRegister from './model/useRegister'
import { pageConfig } from '@/shared/config/pageConfig'

const Register = () => {
	const { errorMessage, onSubmit } = useRegister()

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.2 }}
			className="container grid h-screen"
		>
			<div className="card mx-auto self-center w-1/4">
				<div className="flex justify-center mb-5">
					<h3 className="text-3xl font-semibold">Регистрация</h3>
				</div>
				<Form className="grid" onFinish={onSubmit}>
					<Form.Item name="name" rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}>
						<Input placeholder="Имя" />
					</Form.Item>
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
								message: 'Пароль должен содержать не менее 5 символов',
							},
						]}
					>
						<Input.Password placeholder="Пароль" />
					</Form.Item>
					<div className="flex justify-center mt-2.5">
						<Button className="text-base" htmlType="submit">
							Зарегистрироваться
						</Button>
					</div>
					<div className="flex justify-center mt-2.5 gap-2.5 text-white">
						<span>Есть аккаунт?</span>
						<Link to={pageConfig.auth}>Войти</Link>
					</div>
					{errorMessage && (
						<div className="flex justify-center mt-2.5">
							<span className="error">{errorMessage}</span>
						</div>
					)}
				</Form>
			</div>
		</motion.div>
	)
}

export default Register
