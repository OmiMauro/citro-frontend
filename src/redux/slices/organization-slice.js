import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	getOrganization,
	putOrganization
} from '../../services/organizations-services'
import { STATUS } from '../constants/action-types'

export const fetchOrganization = createAsyncThunk(
	'organization/get',
	async (param, { rejectWithValue }) => {
		try {
			const response = await getOrganization()
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const editOrganization = createAsyncThunk(
	'organization/put',
	async (data, { rejectWithValue }) => {
		try {
			const response = await putOrganization(data)
			if (response) return response.data.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

const organizationSlice = createSlice({
	name: 'organization',
	initialState: {
		organization: {},
		status: null,
		errors: []
	},
	extraReducers: {
		[fetchOrganization.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchOrganization.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.organization = payload.data
		},
		[fetchOrganization.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[editOrganization.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[editOrganization.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.organization = payload.data
		},
		[editOrganization.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		}
	}
})

export const selectorOrganization = (state) => state.organization
export default organizationSlice.reducer
