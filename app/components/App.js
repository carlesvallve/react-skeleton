require('./style.scss');

import React from 'react'
import { SetLanguage, SetPlatform } from '../utils/utils'

//import { connect } from 'react-redux'
//import { refreshList } from '../actions'


let App = ({ dispatch }) => {

  SetLanguage();
  SetPlatform();

  return (
    <div className='app'>
      Hello World
    </div>
  )
}

//App = connect()(App)

export default App
