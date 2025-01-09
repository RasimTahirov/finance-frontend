import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const authThunk = createAsyncThunk(
  'auth',
  async (userData: { email: string; password: string }) => {
    try {
      const res = await axios.post('http://localhost:3000/auth/login', userData)
      return res.data
    } catch (error) {
      console.error('Ошибка при авторизации', error)
      throw error
    }
  },
)
