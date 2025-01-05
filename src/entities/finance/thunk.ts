import axios from 'axios'
import Cookies from 'js-cookie'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { financeData } from './initialState'

const token = Cookies.get('token')

export const financeCreateThunk = createAsyncThunk(
	'financeCreateThunk',
	async (financeData: financeData) => {
		try {
			console.log(token)

			const res = await axios.post('http://localhost:3000/finance', financeData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			return res.data
		} catch (error) {
			console.log('Ошибка создание транзакции', error)
		}
	},
)

export const financeAllThunk = createAsyncThunk('financeAllThunk', async () => {
	try {
		const res = await axios.get('http://localhost:3000/finance', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return res.data
	} catch (error) {
		console.log('Ошибка 123', error)
	}
})

export const financeDelete = createAsyncThunk('financeDelete', async (id: number) => {
	try {
		const res = await axios.delete(`http://localhost:3000/finance/${id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return res.data
	} catch (error) {
		console.log('Ошибка удаления', error)
	}
})

export const financeLastWeek = createAsyncThunk('financeLastWeek', async () => {
	try {
		const res = await axios.get('http://localhost:3000/finance/last-week', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})

		return res.data
	} catch (error) {
		console.log('Ошибка получение общей суммы', error)
	}
})

// Исправить все console.log
