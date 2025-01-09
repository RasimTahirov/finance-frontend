import { Input, Button, Form } from 'antd'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { pageConfig } from '@/shared/config/pageConfig'
import { animationConfig } from '@/shared/config/animationConfig'
import useAuth from './model/useAuth'
import useValidationRules from '@/shared/hooks/useValidationRules'

const Authorization = () => {
  const { onSubmit } = useAuth()
  const { passwordLoginRules, emailRules } = useValidationRules()

  return (
    <motion.div {...animationConfig} className="container grid h-screen">
      <div className="card mx-auto self-center w-1/4">
        <h3 className="flex justify-center mb-5 text-3xl font-semibold">Авторизация</h3>
        <Form className="grid" onFinish={onSubmit}>
          <Form.Item name="email" rules={emailRules}>
            <Input placeholder="Почта" />
          </Form.Item>
          <Form.Item name="password" rules={passwordLoginRules}>
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Button className="mt-2.5 text-base custom-button" type="primary" htmlType="submit">
            Войти
          </Button>
          <div className="link-card">
            <span>Не зарегистрированы?</span>
            <Link to={pageConfig.register} className="hover:link">
              Зарегистрироваться
            </Link>
          </div>
        </Form>
      </div>
    </motion.div>
  )
}

export default Authorization
