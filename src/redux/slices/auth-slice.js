import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	login,
	register,
	forgotPwd,
	verifyTokenService,
	resetPwd,
	verificationEmail,
} from '../../services/auth-services'
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
export const forgotPassword = createAsyncThunk(
	'authForgotPassowrd/post',
	async (data, { rejectWithValue }) => {
		try {
			const response = await forgotPwd(data)
			return response.data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
export const verifyToken = createAsyncThunk(
	'authVerifyToken',
	async (token, { rejectWithValue }) => {
		try {
			const response = await verifyTokenService(token)
			return response.data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
export const resetPassword = createAsyncThunk(
	'authResetPassword/post',
	async ({ data, token }, { rejectWithValue }) => {
		try {
			const response = await resetPwd(data, token)
			return response.data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
export const verifyEmail = createAsyncThunk(
	'authVerifyEmail/post',
	async (token, { rejectWithValue }) => {
		try {
			const response = await verificationEmail(token)
			return response.data
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
		errors: [],
		msg: '',
	},
	reducers: {
		logout: (state) => {
			localStorage.clear()
			state.auth = false
			state.user = {}
			state.token = ''
			state.errors = []
			state.msg = ''
			state.status = null
		},
		clearState: (state) => {
			state.errors = []
			state.msg = ''
		},
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
		},
		[forgotPassword.pending]: (state) => {
			state.status = STATUS.PENDING
			state.msg = ''
			state.errors = []
		},
		[forgotPassword.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.msg = ''
			state.errors = payload.response.data.errors
		},
		[forgotPassword.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.msg = payload.msg
		},
		[verifyToken.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[verifyToken.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.response.data.errors
		},
		[verifyToken.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.msg = payload.msg
		},
		[resetPassword.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[resetPassword.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.response.data.errors
		},
		[resetPassword.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.msg = payload.msg
		},
		[verifyEmail.pending]: (state) => {
			state.status = STATUS.PENDING
			state.msg = ''
			state.errors = []
		},
		[verifyEmail.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.response.data.errors
		},
		[verifyEmail.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.msg = payload.msg
		},
	},
})

export const selectorAuth = (state) => state.auth
export const { logout, clearState } = authSlice.actions
export default authSlice.reducer
