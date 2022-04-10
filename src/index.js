import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'font-awesome/css/font-awesome.min.css'

import './assets/css/styles.css'
import App from './App'

// redux
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './redux/store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const persistor = persistStore(store)
root.render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path='/*' element={<App />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>
)
