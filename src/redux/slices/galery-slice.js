import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
	getGalery,
	newPictures,
	deletePicture
} from '../../services/galery-services'
import { STATUS } from '../constants/action-types'

export const fetchGalery = createAsyncThunk(
	'galery/get',
	async (param = null, { rejectWithValue }) => {
		try {
			const response = await getGalery()
			if (response) return response.data.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
const addImagesToGalery = createAsyncThunk(
	'galery/post',
	async (data, { rejectWithValue }) => {
		try {
			const response = await newPictures(data)
			if (response) return response.data.data
		} catch (error) {
			return rejectWithValue(error.response.data)
		}
	}
)
const removePicture = createAsyncThunk(
	'galery/delete',
	async (id, { rejectWithValue }) => {
		try {
			const response = await deletePicture(id)
			if (response) return response.data.data
		} catch (error) {
			return rejectWithValue(error.response.data)
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
		[fetchGalery.fulfilled]: (state, action) => {
			state.status = STATUS.SUCCESSFUL
			state.galery = action.payload
			errors: []
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
			state.galery = payload
			errors: []
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
			state.galery = state.galery.filter((id) => id !== payload)
			errors: []
		},
		[removePicture.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.data.errors
		}
	}
})

export const selectorGalery = (state) => state.galery
export default galerySlice.reducer
