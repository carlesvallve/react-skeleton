import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

import GridList from './GridList/GridList'
require('../css/stylesheet.scss');


const App = () => {

  window.lang= 'en'

  return (
    <div>
      {/*<AddTodo />
      <VisibleTodoList />
      <Footer />
      */}

      <div className='#contents, .pageWrap' style={{
          width: '100%', //980 + 'px',
          maxWidth: '1280px',
          minWidth: '800px',
          background: 'pink',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
        <GridList
          data={require("json!../assets/json/categories.json")}
          text='This is a grid list'
        />
      </div>

    </div>
  )
}

export default App
