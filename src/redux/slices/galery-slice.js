import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getGalery } from '../../services/galeryServices'
import { STATUS } from '../constants/action-types'

export const fetchGalery = createAsyncThunk('galery/get', async () => {
	const {
		data: { data }
	} = await getGalery()
	return data
})
const galerySlice = createSlice({
	name: 'galery',
	initialState: {
		galery: [],
		status: null
	},
	extraReducers: {
		[fetchGalery.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchGalery.fulfilled]: (state, action) => {
			state.status = STATUS.SUCCESSFUL
			state.galery = action.payload
		},
		[fetchGalery.rejected]: (state) => {
			state.status = STATUS.FAILED
		}
	}
})

export const selectorGalery = (state) => state.galery
export default galerySlice.reducer
