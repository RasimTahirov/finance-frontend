import axios from 'axios'
import Cookies from 'js-cookie'
import { createAsyncThunk } from '@reduxjs/toolkit'

const token = Cookies.get('token')

export const categoryThunk = createAsyncThunk(
	'categoryThunk',
	async (categoryData: { title: string }, { rejectWithValue }) => {
		try {
			const res = await axios.post('http://localhost:3000/category', categoryData, {
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
	},
)

export const categoryAll = createAsyncThunk('categoryAll', async (_, { rejectWithValue }) => {
	try {
		const res = await axios.get('http://localhost:3000/category', {
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

export const deleteCategory = createAsyncThunk(
	'deleteCategory',
	async (id: number, { rejectWithValue }) => {
		try {
			const res = await axios.delete(`http://localhost:3000/category/${id}`, {
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
	},
)
