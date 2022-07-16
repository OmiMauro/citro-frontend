import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { STATUS } from '../constants/action-types'
import { getInscriptions } from '../../services/inscriptions-services'

export const fetchInscriptions = createAsyncThunk(
	'inscriptions/get',
	async (param, { rejectWithValue }) => {
		try {
			const response = await getInscriptions()
			if (response) return response?.data
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
export const fetchInscriptionsByUser = createAsyncThunk(
	'',
	(param, { rejectWithValue }) => {}
)
export const fetchInscription = createAsyncThunk('', (param, {}) => {})
export const createInscription = createAsyncThunk('', (param, {}) => {})

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
		[fetchInscriptions.pending]: (state, { payload }) => {
			state.status = STATUS.PENDING
		},
		[fetchInscriptions.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.inscriptions = []
			state.errors = payload.data.errors
		},
		[fetchInscriptions.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.errors = null
			state.inscriptions = payload.data
		},
	},
})

export const selectorInscriptions = (state) => state.inscriptions
export default inscriptionsSlice.reducer
