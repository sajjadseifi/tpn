import React from 'react'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { DialogProvider } from './components/dialog/context'
import { Provider } from 'react-redux'
import store from './store'

export const App = () => (
  <Provider store={store}>
    <DialogProvider>
      <Router>
        <Routes />
      </Router>
    </DialogProvider>
  </Provider>
)
