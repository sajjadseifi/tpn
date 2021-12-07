import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/index.scss'
import '@styles/layout.scss'
import '@styles/ui.scss'
import Routes from './routes'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { DialogProvider } from './components/dialog/context'

// generate app for routeing
const App = () => (
  <React.StrictMode>
    <DialogProvider>
      <Router>
        <Routes />
      </Router>
    </DialogProvider>
  </React.StrictMode>
)

// entries dom element as root
const root = document.getElementById('root')
//
// "homepage": "https://sajjadseifi.github.io/tpn",
ReactDOM.render(<App />, root)

reportWebVitals()
