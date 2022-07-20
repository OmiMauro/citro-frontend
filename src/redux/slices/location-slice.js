import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getLocalities, getProvinces } from '../../services/locations-services'
import { STATUS } from '../constants/action-types'

export const fetchProvinces = createAsyncThunk(
	'locations/getProvinces',
	async (params, { rejectWithValue }) => {
		try {
			const response = await getProvinces(params)
			const sortedProvinces = response.data.provincias.sort(function (a, b) {
				if (a.nombre > b.nombre) return 1
				if (a.nombre < b.nombre) return -1
				return 0
			})
			return sortedProvinces
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
export const fetchLocalities = createAsyncThunk(
	'locations/getLocality',
	async (param, { rejectWithValue }) => {
		try {
			const response = await getLocalities(param)
			const sortedLocalities = await response.data.municipios.sort(function (
				a,
				b
			) {
				if (a.nombre > b.nombre) return 1
				if (a.nombre < b.nombre) return -1
				return 0
			})
			return sortedLocalities
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

const locationsSlice = createSlice({
	initialState: {
		errors: [],
		status: null,
		provinces: [],
		localities: [],
	},
	name: 'locations',
	extraReducers: {
		[fetchProvinces.pending]: (state, { payload }) => {
			state.status = STATUS.PENDING
		},
		[fetchProvinces.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.data.errors
		},
		[fetchProvinces.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.errors = []
			state.provinces = payload
		},
		[fetchLocalities.pending]: (state, { payload }) => {
			state.status = STATUS.PENDING
		},
		[fetchLocalities.rejected]: (state, { payload }) => {
			state.status = STATUS.FAILED
			state.errors = payload.data.errors
		},
		[fetchLocalities.fulfilled]: (state, { payload }) => {
			state.status = STATUS.SUCCESSFUL
			state.errors = []
			state.localities = payload
		},
	},
})

export const selectorLocations = (state) => state.locations
export default locationsSlice.reducer
