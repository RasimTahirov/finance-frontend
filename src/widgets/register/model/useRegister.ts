import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'
import { useState } from 'react'
import { UserData } from '@/entities/user/types/type'
import { registerUser } from '@/entities/user/register/api/register.api'
import { pageConfig } from '@/shared/config/pageConfig'

const useRegister = () => {
	const [errorMessage, setErrorMessage] = useState('')
	const navigate = useNavigate()

	const onSubmit = async (data: UserData) => {
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
