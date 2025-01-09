import { Rule } from 'antd/es/form'

const useValidationRules = () => {
  const emailRules: Rule[] = [
    {
      type: 'email',
      message: 'Введён некорректный адрес электронной почты',
    },
    {
      required: true,
      message: 'Пожалуйста, введите адрес электронной почты',
    },
  ]

  const passwordLoginRules: Rule[] = [
    {
      required: true,
      message: 'Пожалуйста, введите пароль',
    },
  ]

  const passwordRegisterRules = [
    {
      required: true,
      message: 'Пароль должен содержать не менее 5 символов',
    },
  ]

  const nameRules = [{ required: true, message: 'Пожалуйста, введите имя' }]

  return { passwordLoginRules, passwordRegisterRules, emailRules, nameRules }
}

export default useValidationRules
