import React from 'react'
import { render } from 'react-dom'
//import { renderToString, renderToStaticMarkup } from 'react-dom/server'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


// how to build outputs:
// dev        -> webpack -p; sp-splitex/sp-splitex.sh;
// production -> npm run build-production; sp-splitex/sp-splitex.sh;


let store = createStore(todoApp) //, initialState

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
