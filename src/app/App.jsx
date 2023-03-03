import '../fake-db'
import '../styles/_app.scss'
import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import EgretTheme from './EgretLayout/EgretTheme/EgretTheme'
import AppContext from './appContext'
import history from 'history.js'

import '../styles/nprogress.css'
import { loadProgressBar } from 'axios-progress-bar'

import routes from './RootRoutes'
import Auth from './auth/Auth'
import EgretLayout from './EgretLayout/EgretLayout'
import AuthGuard from './auth/AuthGuard'
import { toast } from 'react-toastify'
import RootReducer from './redux/reducers/RootReducer'
import createSagaMiddleware from '@redux-saga/core'
import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './redux/sagas/rootSagas'

loadProgressBar()
toast.configure()

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={store}>
        <React.StrictMode>
          <EgretTheme>
            <Auth>
              <Router history={history}>
                <AuthGuard>
                  <EgretLayout />
                </AuthGuard>
              </Router>
            </Auth>
          </EgretTheme>
        </React.StrictMode>
      </Provider>
    </AppContext.Provider>
  )
}

export default App
