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
		isLoading: false,
		status: null,
		errors: []
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
			state.errors = []
			state.isLoading = false
		},
		[logged.rejected]: (state, action) => {
			state.status = STATUS.FAILED
			state.isLoading = false
			state.errors = action.payload.response.data.errors
		},
		[registered.pending]: (state) => {
			state.status = STATUS.PENDING
			state.isLoading = true
		},

		[registered.rejected]: (state, action) => {
			state.status = STATUS.FAILED
			state.isLoading = true
			state.errors = action.payload.response.data.errors
		},
		[registered.fulfilled]: (state, action) => {
			state.status = STATUS.SUCCESSFUL
			state.auth = true
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLoading = false
			state.errors = []
		}
	}
})

export const selectorAuth = (state) => state.auth
export const { logout } = authSlice.actions
export default authSlice.reducer
