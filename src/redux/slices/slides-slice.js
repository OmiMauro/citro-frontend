import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	getSlides,
	getSlideById,
	newSlide,
	deleteSlide,
	putSlide
} from '../../services/slides-services'
import { STATUS } from '../constants/action-types'

export const fetchSlides = createAsyncThunk(
	'slides/get',
	async (param = null, { rejectWithValue }) => {
		try {
			const response = await getSlides()
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const fetchSlideById = createAsyncThunk(
	'slides/getById',
	async (id, { rejectWithValue }) => {
		try {
			const response = await getSlideById(id)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const createSlide = createAsyncThunk(
	'slides/create',
	async (data, { rejectWithValue }) => {
		try {
			const response = await newSlide(data)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const updateSlide = createAsyncThunk(
	'slides/put',
	async (data, { rejectWithValue }) => {
		try {
			const response = await putSlide(data, data._id)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
export const removeSlide = createAsyncThunk(
	'slides/delete',
	async (id, { rejectWithValue }) => {
		try {
			const response = await deleteSlide(id)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
const slidesSlice = createSlice({
	name: 'slides',
	initialState: {
		slides: [],
		slide: {},
		status: null,
		errors: [],
		msg: ''
	},
	extraReducers: {
		[fetchSlides.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchSlides.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.slides = payload.data
			state.msg = payload.msg
			state.errors = []
		},
		[fetchSlides.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[fetchSlideById.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchSlideById.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.slide = payload.data
		},
		[fetchSlideById.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[createSlide.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[createSlide.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.slide = payload.data
			state.slides = state.slides.push(payload.data)
			state.msg = payload.msg
		},
		[createSlide.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[updateSlide.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[updateSlide.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.slide = payload.data
			state.msg = payload.msg
		},
		[updateSlide.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
		},
		[removeSlide.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[removeSlide.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.slides = state.slides.filter(({ _id }) => _id !== payload.data._id)
			state.msg = payload.msg
		},
		[removeSlide.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.errors
			state.msg = ''
		}
	}
})

export const selectorSlides = (state) => state.slides
export default slidesSlice.reducer
