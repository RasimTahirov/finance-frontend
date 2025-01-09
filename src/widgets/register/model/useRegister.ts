import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { useState } from 'react'

import { registerUser } from '@/entities/user/register/api/register.api'
import { pageConfig } from '@/shared/config/pageConfig'
import { IUser } from '@/entities/user/types/type'

const useRegister = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (data: IUser) => {
    try {
      const res = await registerUser(data)
      if (res) {
        message.success('Вы успешно зарегистрировались')
      }
      navigate(pageConfig.auth)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        setErrorMessage(error.response.data.message)
      }
    }
  }

  return { errorMessage, onSubmit }
}

export default useRegister
