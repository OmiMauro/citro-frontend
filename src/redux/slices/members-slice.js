import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	getMembers,
	getMemberById,
	newMember,
	deleteMember,
	editMember,
	editMemberImage
} from '../../services/members-services'
import { STATUS } from '../constants/action-types'

export const fetchMembers = createAsyncThunk(
	'members/get',
	async (param = null, { rejectWithValue }) => {
		try {
			const response = await getMembers()
			if (response) return response.data.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const fetchMemberById = createAsyncThunk(
	'members/getById',
	async (id, { rejectWithValue }) => {
		try {
			const response = await getMemberById(id)
			if (response) return response.data.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const createMember = createAsyncThunk(
	'members/post',
	async (data, { rejectWithValue }) => {
		try {
			const response = await newMember(data)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const putMember = createAsyncThunk(
	'members/put',
	async (data, { rejectWithValue }) => {
		try {
			const response = await editMember(data, data._id)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const patchMemberImage = createAsyncThunk(
	'members/patch/image',
	async ({ data, id }, { rejectWithValue }) => {
		try {
			const response = await editMemberImage(data, id)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const removeMember = createAsyncThunk(
	'members/delete',
	async (id, { rejectWithValue }) => {
		try {
			const response = await deleteMember(id)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
const membersSlice = createSlice({
	name: 'members',
	initialState: {
		members: [],
		member: {},
		status: null,
		errors: [],
		msg: ''
	},
	extraReducers: {
		[fetchMembers.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchMembers.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.members = payload
			state.member = {}
		},
		[fetchMembers.rejected]: (state, action) => {
			state.status = STATUS.FAILED
			state.errors = action.payload.errors
		},
		[fetchMemberById.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchMemberById.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.member = payload
			state.msg = ''
			state.errors = []
		},
		[fetchMemberById.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[createMember.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[createMember.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.member = payload
			state.members = state.members.push(payload)
			state.msg = payload.msg
		},
		[createMember.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload
		},
		[putMember.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[putMember.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.member = payload.data
			state.msg = payload.msg
		},
		[putMember.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[patchMemberImage.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[patchMemberImage.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.member = payload.data
		},
		[patchMemberImage.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[removeMember.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[removeMember.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[removeMember.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.members = state.members.filter(
				(member) => member._id !== payload.data._id
			)
			state.member = payload
			state.msg = payload.msg
		},
		[removeMember.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload
		}
	}
})

export const selectorMembers = (state) => state.members
export default membersSlice.reducer
