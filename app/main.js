import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

//import { show, hide, setVisible, toggleVisible } from './actions'

// let initialState = [{]
//   visibilities: {
//     popup0: { id: 0, visible: true },
//     popup1: { id: 1, visible: false }
//   }
// ]

let store = createStore(todoApp) //, initialState

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
