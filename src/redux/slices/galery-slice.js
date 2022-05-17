import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	getGalery,
	newPictures,
	deletePicture
} from '../../services/galery-services'
import { STATUS } from '../constants/action-types'

export const fetchGalery = createAsyncThunk(
	'galery/get',
	async (page = 1, { rejectWithValue }) => {
		try {
			const response = await getGalery({ page })
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)
export const addImagesToGalery = createAsyncThunk(
	'galery/post',
	async (data, { rejectWithValue }) => {
		try {
			const response = await newPictures(data)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)
export const removePicture = createAsyncThunk(
	'galery/delete',
	async (id, { rejectWithValue }) => {
		try {
			const response = await deletePicture(id)
			if (response) return response.data
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)
const galerySlice = createSlice({
	name: 'galery',
	initialState: {
		galery: [],
		status: null,
		errors: []
	},
	extraReducers: {
		[fetchGalery.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchGalery.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.galery = payload.data
			state.msg = payload.msg
			state.errors = []
		},
		[fetchGalery.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.data.errors
		},
		[addImagesToGalery.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[addImagesToGalery.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.galery = payload.data
			state.msg = payload.msg
			state.errors = []
		},
		[addImagesToGalery.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.data.errors
		},
		[removePicture.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[removePicture.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.galery.docs = state.galery.docs.filter(
				({ _id }) => _id !== payload.data._id
			)
			state.galery.total = state.galery.total - 1
			state.msg = payload.msg
			state.errors = []
		},
		[removePicture.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.data.errors
		}
	}
})

export const selectorGalery = (state) => state.galery
export default galerySlice.reducer
