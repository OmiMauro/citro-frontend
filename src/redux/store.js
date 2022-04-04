import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'

import organizationSlice from './reducers/organization/organizationSlice'
import membersSlice from './reducers/members/membersSlice'

const reducers = combineReducers({
	organization: organizationSlice,
	members: membersSlice
})

const store = configureStore({
	reducer: reducers,
	middleware: [thunk]
})

export default store
