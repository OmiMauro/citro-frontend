import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { STATUS } from '../constants/action-types'
import { getInscriptionsByEvent } from '../../services/inscriptions-services'
export const fetchInscriptionsByEvent = createAsyncThunk(
	'inscriptions/get',
	async ({ eventId }, { rejectWithValue }) => {
		try {
			const response = await getInscriptionsByEvent(eventId)
			if (response) return response?.data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
const inscriptionsSlice = createSlice({
	name: 'inscriptions',
	initialState: {
		inscriptions: [],
		inscription: {},
		status: null,
		errors: null,
		msg: '',
	},
	extraReducers: {
		[fetchInscriptionsByEvent.pending]: (state, { payload }) => {
			state.status = STATUS.PENDING
		},
		[fetchInscriptionsByEvent.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.inscriptions = []
			state.errors = payload.data.errors
		},
		[fetchInscriptionsByEvent.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.errors = null
			state.inscriptions = payload.data
		},
	},
})

export const selectorInscriptions = (state) => state.inscriptions
export default inscriptionsSlice.reducer
