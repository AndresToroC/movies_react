import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { MovieApp } from './MovieApp'
import store from './store/store'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={ store }>
    <MovieApp />
  </Provider>
  // </React.StrictMode>
)
