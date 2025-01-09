import axios from 'axios'
import { IRegisterData } from '../../types/type'

export const registerUser = async (data: IRegisterData) => {
  try {
    const res = await axios.post('http://localhost:3000/register', data)
    return res.data
  } catch (error) {
    console.error('Ошибка при регистрации', error)
    throw error
  }
}
