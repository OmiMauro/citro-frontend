import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import './assets/css/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './App'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<App />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
