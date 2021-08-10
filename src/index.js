import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import './styles.css'
import dotenv from 'dotenv/config'
ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
)
