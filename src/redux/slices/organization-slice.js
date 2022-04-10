import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getOrganization } from '../../services/organizations-services'
import { STATUS } from '../constants/action-types'

export const fetchOrganization = createAsyncThunk(
	'organization/get',
	async () => {
		const {
			data: { data }
		} = await getOrganization()
		return data
	}
)
const organizationSlice = createSlice({
	name: 'organization',
	initialState: {
		organization: {},
		status: null
	},
	extraReducers: {
		[fetchOrganization.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchOrganization.fulfilled]: (state, action) => {
			state.status = STATUS.SUCCESSFUL
			state.organization = action.payload
		},
		[fetchOrganization.rejected]: (state) => {
			state.status = STATUS.FAILED
		}
	}
})

export const selectorOrganization = (state) => state.organization
export default organizationSlice.reducer
