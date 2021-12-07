import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/index.scss'
import '@styles/layout.scss'
import '@styles/ui.scss'
import reportWebVitals from './reportWebVitals'
import { App } from './App'

// entries dom element as root
const root = document.getElementById('root')
//
// "homepage": "https://sajjadseifi.github.io/tpn",
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
)

reportWebVitals()
