import Cookies from 'js-cookie'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const token = Cookies.get('token')

export const balanceThunk = createAsyncThunk('balanceThunk', async (_, { rejectWithValue }) => {
	try {
		const res = await axios.get('http://localhost:3000/finance/total', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return res.data
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return rejectWithValue(error.message || 'Ошибка при загрузке данных')
		}
	}
})
