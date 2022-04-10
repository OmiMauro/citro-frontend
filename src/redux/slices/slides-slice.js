import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSlides } from '../../services/slides-services'
import { STATUS } from '../constants/action-types'

export const fetchSlides = createAsyncThunk('slides/get', async () => {
	const {
		data: { data }
	} = await getSlides()
	return data
})
const slidesSlice = createSlice({
	name: 'slides',
	initialState: {
		slides: [],
		status: null
	},
	extraReducers: {
		[fetchSlides.pending]: (state) => {
			state.status = STATUS.PENDING
		},
		[fetchSlides.fulfilled]: (state, action) => {
			state.status = STATUS.SUCCESSFUL
			state.slides = action.payload
		},
		[fetchSlides.rejected]: (state) => {
			state.status = STATUS.FAILED
		}
	}
})

export const selectorSlides = (state) => state.slides
export default slidesSlice.reducer
