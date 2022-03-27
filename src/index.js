import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import './assets/css/styles.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
