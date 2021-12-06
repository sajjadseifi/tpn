import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/index.css'
import Routes from './routes'
import reportWebVitals from './reportWebVitals'
import {  BrowserRouter as Router } from 'react-router-dom'

// generate app for routeing
const App = () => (
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>
)

// entries dom element as root
const root = document.getElementById('root')
//
// "homepage": "https://sajjadseifi.github.io/tpn",
ReactDOM.render(<App />, root)

reportWebVitals()