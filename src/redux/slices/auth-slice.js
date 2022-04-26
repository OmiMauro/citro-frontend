import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login, register } from '../../services/auth-services'
import { STATUS } from '../constants/action-types'

export const logged = createAsyncThunk('authLogin/post', async (data) => {
	const response = await login(data)
	localStorage.setItem('token', response.data.data.token)
	return response.data.data
})

export const registered = createAsyncThunk(
	'authRegister/post',
	async (data) => {
		const response = await register(data)
		localStorage.setItem('token', response.data.data.token)
		return response.data.data
	}
)
const authSlice = createSlice({
	name: 'auth',
	initialState: {
		auth: false,
		user: {},
		token: '',
		isLoading: false,
		status: null
	},
	reducers: {
		logout: (state) => {
			localStorage.clear()
			state.auth = false
			state.token = ''
			state.user = ''
		}
	},
	extraReducers: {
		[logged.pending]: (state) => {
			state.status = STATUS.PENDING
			state.isLoading = true
		},
		[logged.fulfilled]: (state, action) => {
			state.status = STATUS.SUCCESSFUL
			state.auth = true
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoading = false
		},
		[logged.rejected]: (state) => {
			state.status = STATUS.FAILED
			state.isLoading = false
		},
		[registered.pending]: (state) => {
			state.status = STATUS.PENDING
			state.isLoading = true
		},
		[registered.fulfilled]: (state, action) => {
			state.status = STATUS.SUCCESSFUL
			state.auth = true
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoading = false
		},
		[registered.rejected]: (state) => {
			state.status = STATUS.FAILED
			state.isLoading = false
		}
	}
})

export const selectorAuth = (state) => state.auth
export const { logout } = authSlice.actions
export default authSlice.reducer
