import React, { Suspense, useEffect, useState } from 'react'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { DialogProvider } from './components/dialog/context'
import { Provider } from 'react-redux'
import store from './store'
import { AppLoading } from './components/loading'

export const App = () => {
  const [fakeLoading, setFakeLoadig] = useState(true)

  useEffect(() => {
    setTimeout(() => setFakeLoadig(false), 3000)
  }, [])

  if (fakeLoading) return <AppLoading />
  return (
    <Suspense fallback={AppLoading}>
      <Provider store={store}>
        <DialogProvider>
          <Router basename="/tpn">
            <Routes />
          </Router>
        </DialogProvider>
      </Provider>
    </Suspense>
  )
}
