import React from 'react'
import { render } from 'react-dom'
//import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


let store = createStore(todoApp) //, initialState

console.log('Initializing main...')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// const html = renderToString(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
//
// document.getElementById('root').innerHTML = html
// console.log('>>>', html)
