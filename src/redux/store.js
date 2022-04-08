import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

// reducers
import organizationReducer from './slices/organization-slice'
import membersReducer from './slices/members-slice'
import slidesReducer from './slices/slides-slice'

const reducers = combineReducers({
	organization: organizationReducer,
	slides: slidesReducer,
	members: membersReducer
})

const store = configureStore({
	reducer: reducers,
	middleware: [thunk]
})

export default store
