import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { STATUS } from '../constants/action-types'
import {
	getInscriptions,
	newInscription,
	getInscriptionById,
} from '../../services/inscriptions-services'

export const fetchInscriptions = createAsyncThunk(
	'inscriptions/get',
	async (param, { rejectWithValue }) => {
		try {
			const response = await getInscriptions()
			if (response) return response?.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const fetchInscriptionsByUser = createAsyncThunk(
	'',
	(param, { rejectWithValue }) => {}
)
export const fetchInscriptionById = createAsyncThunk(
	'inscription/:inscriptionId',
	async (_inscriptionId, { rejectWithValue }) => {
		try {
			const response = await getInscriptionById(_inscriptionId)
			if (response) return response?.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const createInscription = createAsyncThunk(
	'inscription/create',
	async ({ _eventId, data }, { rejectWithValue }) => {
		try {
			const response = await newInscription({ _eventId, data })
			if (response) return response?.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

const inscriptionsSlice = createSlice({
	name: 'inscriptions',
	initialState: {
		inscriptions: [],
		inscription: {},
		status: null,
		errors: [],
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
			state.errors = []
			state.inscriptions = payload.data
		},
		[createInscription.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[createInscription.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[createInscription.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.errors = []
			state.msg = payload.msg
			state.inscription = payload.data
		},
		[fetchInscriptionById.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchInscriptionById.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[fetchInscriptionById.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.errors = []
			state.msg = payload.msg
			state.inscription = payload.data
		},
	},
})

export const selectorInscriptions = (state) => state.inscriptions
export default inscriptionsSlice.reducer
