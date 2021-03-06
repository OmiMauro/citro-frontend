import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

// reducers
import organizationReducer from './slices/organization-slice'
import membersReducer from './slices/members-slice'
import slidesReducer from './slices/slides-slice'
import galeryReducer from './slices/galery-slice'
import authReducer from './slices/auth-slice'
import userReducer from './slices/users-slice'
import eventReducer from './slices/event-slice'
import inscriptionsReducer from './slices/inscriptions-slice'
import locationsReducer from './slices/location-slice'

const reducers = combineReducers({
	organization: organizationReducer,
	slides: slidesReducer,
	members: membersReducer,
	galery: galeryReducer,
	auth: authReducer,
	users: userReducer,
	events: eventReducer,
	inscriptions: inscriptionsReducer,
	locations: locationsReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['users', 'admin', 'auth'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
})

export default store
