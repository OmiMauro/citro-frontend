import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllUsers, getUserById } from '../../services/users-services'
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
			return rejectWithValue(error)
		}
	}
)
const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		errors: [],
		user: {},
		status: null
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
			state.errors = payload
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
			state.errors = payload
		}
	}
})

export const selectorUsers = (state) => state.users
export default userSlice.reducer
