import React, { Suspense } from 'react'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { DialogProvider } from './components/dialog/context'
import { Provider } from 'react-redux'
import store from './store'
import { AppLoadin } from './components/loading'

export const App = () => {
  return (
    <Suspense fallback={AppLoadin}>
      <Provider store={store}>
        <DialogProvider>
          <Router>
            <Routes />
          </Router>
        </DialogProvider>
      </Provider>
    </Suspense>
  )
}
