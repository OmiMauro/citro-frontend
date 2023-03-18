import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
	getAllUsers,
	getUserById,
	putUser,
	patchPassword,
} from '../../services/users-services'
import { STATUS } from '../constants/action-types'

export const fetchUsers = createAsyncThunk(
	'users/get',
	async (param, { rejectWithValue }) => {
		try {
			const response = await getAllUsers()
			if (response) return response.data.data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
export const fetchUserById = createAsyncThunk(
	'users/getById',
	async (id, { rejectWithValue }) => {
		try {
			const response = await getUserById(id)
			if (response) return response.data.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const editUser = createAsyncThunk(
	'users/put',
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const response = await putUser(id, data)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const editPassword = createAsyncThunk(
	'users/put/password',
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const response = await patchPassword(id, data)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const editImage = createAsyncThunk('users/put/image', async () => {
	try {
		const response = await patchImage(data)
		if (response) return response.data
	} catch (error) {
		return rejectWithValue(error.response.data)
	}
})
const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		errors: [],
		user: {},
		msg: '',
		status: null,
	},
	extraReducers: {
		[fetchUsers.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchUsers.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.users = payload
			state.errors = []
		},
		[fetchUsers.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[fetchUserById.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchUserById.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.user = payload
			state.errors = []
		},
		[fetchUserById.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[editUser.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[editUser.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.user = payload
			state.errors = []
			state.msg = payload.msg
		},
		[editUser.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[editPassword.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[editPassword.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.errors = []
			state.msg = payload.msg
		},
		[editPassword.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[editImage.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[editImage.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.user = payload.data
		},
		[editImage.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
	},
})

export const selectorUsers = (state) => state.users
export default userSlice.reducer
