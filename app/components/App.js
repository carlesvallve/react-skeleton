//import AddTodo from '../containers/AddTodo'
//import VisibleTodoList from '../containers/VisibleTodoList'
//import Footer from './Footer'
// <AddTodo />
// <VisibleTodoList />
// <Footer />

require('../css/stylesheet.scss');
import React from 'react'
import { SetLanguage, SetPlatform } from './Utils/Utils'
import GridList from './List/GridList/GridList'
import SliderList from './List/Sliderlist/Sliderlist.js';
import Popup from './Popup/Popup'


const App = () => {

  // config application
  SetLanguage();
  SetPlatform();

  let list, appClassName;
  if (window.platform === 'desktop' || window.platform === 'tablet') {
    appClassName = 'app'
    list = <GridList
      data={require("json!../assets/json/categories.json")}
      text='This is a grid list'
      expanded={false}
      itemCount={8}
    />
  } else {
    appClassName = 'app smartphone'
    list = <SliderList
      data={require("json!../assets/json/categories.json")}
      text='This is a slider list'
      itemCount={16}
    />
  }


  return (
    <div className={appClassName}>

      {/*

      */}

      {list}
      <Popup active={false} />

    </div>
  )
}

export default App
