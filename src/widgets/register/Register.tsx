import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import { motion } from 'framer-motion'

import { pageConfig } from '@/shared/config/pageConfig'
import { animationConfig } from '@/shared/config/animationConfig'
import useRegister from './model/useRegister'
import useValidationRules from '@/shared/hooks/useValidationRules'

const Register = () => {
  const { errorMessage, onSubmit } = useRegister()
  const { nameRules, emailRules, passwordRegisterRules } = useValidationRules()

  return (
    <motion.div {...animationConfig} className="container grid h-screen">
      <div className="card mx-auto self-center w-1/4">
        <h3 className="flex justify-center mb-5 text-3xl font-semibold">Регистрация</h3>
        <Form className="grid" onFinish={onSubmit}>
          <Form.Item name="name" rules={nameRules}>
            <Input placeholder="Имя" />
          </Form.Item>
          <Form.Item name="email" rules={emailRules}>
            <Input placeholder="Почта" />
          </Form.Item>
          <Form.Item name="password" rules={passwordRegisterRules}>
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Button className="text-base mt-2.5 custom-button" type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
          <div className="link-card">
            <span>Есть аккаунт?</span>
            <Link to={pageConfig.auth} className="hover:link">
              Войти
            </Link>
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
