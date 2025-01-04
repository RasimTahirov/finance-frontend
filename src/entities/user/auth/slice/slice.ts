import { createSlice } from '@reduxjs/toolkit'
import { authThunk } from '../thunks/thunk'
import Cookies from 'js-cookie'
import { UserState } from '../../types/type'

export const initialState: UserState = {
	user: null,
	error: null,
	loading: false,
	token: Cookies.get('token') || null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null
			localStorage.removeItem('name')
			localStorage.removeItem('email')
			Cookies.remove('token')
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authThunk.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(authThunk.fulfilled, (state, action) => {
				state.loading = false
				state.error = null
				state.user = action.payload

				if (action.payload?.token) {
					Cookies.set('token', action.payload?.token, {
						secure: true,
						sameSite: 'strict',
						expires: 30,
					})
				}
			})
			.addCase(authThunk.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload as string
			})
	},
})

export default authSlice.reducer
export const { logout } = authSlice.actions
