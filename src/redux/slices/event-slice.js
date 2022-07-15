import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	editEvent,
	getEvents,
	deleteChronogram,
	editChronogram,
	newChronogram,
	getEventById,
} from '../../services/events-services'
import { STATUS } from '../constants/action-types'

export const fetchEvents = createAsyncThunk(
	'events/get',
	async (param, { rejectWithValue }) => {
		try {
			const response = await getEvents()
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const fetchEventsById = createAsyncThunk(
	'events/getById',
	async (id, { rejectWithValue }) => {
		try {
			const response = await getEventById(id)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const createEvent = createAsyncThunk(
	'events/post',
	async (data, { rejectWithValue }) => {
		try {
			const response = await newEvent(data)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const updateEvent = createAsyncThunk(
	'events/put',
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const response = await editEvent(id, data)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const createChronogram = createAsyncThunk(
	'events/post/chronogram',
	async ({ id, data }, { rejectWithValue }) => {
		try {
			const response = await newChronogram(id, data)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const updateChronogram = createAsyncThunk(
	'events/put/chronogram',
	async ({ id, chronogramId, data }, { rejectWithValue }) => {
		try {
			const response = await editChronogram({ id, chronogramId }, data)
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const removeChronogram = createAsyncThunk(
	'events/delete/chronogram',
	async ({ id, chronogramId }, { rejectWithValue }) => {
		try {
			const response = await deleteChronogram({ id, chronogramId })
			return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)

const eventSlice = createSlice({
	name: 'event',
	initialState: {
		events: [],
		event: {},
		errors: [],
		msg: '',
	},
	extraReducers: {
		[fetchEvents.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchEvents.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.msg = payload.msg
			state.errors = payload.errors
		},
		[fetchEvents.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.events = payload.data
			state.msg = payload.msg
		},
		[fetchEventsById.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchEventsById.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.msg = payload.msg
			state.errors = payload.errors
		},
		[fetchEventsById.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.event = payload.data
			state.msg = payload.msg
		},
		[createEvent.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[createEvent.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.msg = payload.msg
			state.errors = payload.errors
		},
		[createEvent.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.event = payload.data
			state.msg = payload.msg
			state.events = state.events.push(payload.data)
		},
		[updateEvent.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[updateEvent.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.msg = payload.msg
			state.errors = payload.errors
		},
		[updateEvent.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.event = payload.data
			state.msg = payload.msg
			// Update state of events when one event was updated
			//			state.events = state.events.push(payload.data)
		},
		[createChronogram.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[createChronogram.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.msg = payload.msg
			state.errors = payload.errors
		},
		[createChronogram.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.event.chronogram = state.event.chronogram.push(payload.data)
			state.msg = payload.msg
		},
		[updateChronogram.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[updateChronogram.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.msg = payload.msg
			state.errors = payload.errors
		},
		[updateChronogram.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.event.chronogram = payload.data
			state.msg = payload.msg
		},
		[removeChronogram.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[removeChronogram.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.msg = payload.msg
			state.errors = payload.errors
		},
		[removeChronogram.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.msg = payload.msg
			state.events = state.events.filter(
				(item) => item.chronogram._id !== payload.data._id
			)
		},
	},
})

export const selectorEvent = (state) => state.events
export default eventSlice.reducer
