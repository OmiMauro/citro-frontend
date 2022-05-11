import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login, register } from '../../services/auth-services'
import { STATUS } from '../constants/action-types'

export const logged = createAsyncThunk(
	'authLogin/post',
	async (data, { rejectWithValue }) => {
		try {
			const response = await login(data)
			if (response) {
				localStorage.setItem('token', response.data.data.token)
				return response.data.data
			}
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const registered = createAsyncThunk(
	'authRegister/post',
	async (data, { rejectWithValue }) => {
		try {
			const response = await register(data)
			if (response) {
				localStorage.setItem('token', response.data.data.token)
				return response.data.data
			}
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
const authSlice = createSlice({
	name: 'auth',
	initialState: {
		auth: false,
		user: {},
		token: '',
		status: null,
		errors: []
	},
	reducers: {
		logout: (state) => {
			localStorage.clear()
			state.auth = false
			state.token = ''
			state.user = {}
		}
	},
	extraReducers: {
		[logged.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[logged.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.auth = true
			state.token = payload.token
			state.user = payload.user
			localStorage.setItem('token', payload.token)
			state.errors = []
		},
		[logged.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.response.data.errors
		},
		[registered.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[registered.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.response.data.errors
		},
		[registered.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.auth = true
			state.user = payload.user
			state.token = payload.token
			state.errors = []
		}
	}
})

export const selectorAuth = (state) => state.auth
export const { logout } = authSlice.actions
export default authSlice.reducer
