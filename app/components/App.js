//import AddTodo from '../containers/AddTodo'
//import VisibleTodoList from '../containers/VisibleTodoList'
//import Footer from './Footer'
// <AddTodo />
// <VisibleTodoList />
// <Footer />

require('../css/stylesheet.scss');
import React from 'react'
import { SetLanguage, SetPlatform } from './Utils/Utils'
import Logo from './Logo/Logo'
import GridList from './List/GridList/GridList'
import SliderList from './List/Sliderlist/Sliderlist.js';
import InfoForm from './InfoForm/InfoForm'
import Popup from './Popup/Popup'


const App = () => {

  // config application
  SetLanguage();
  SetPlatform();

  let list, appClassName, contentsStyle;

  if (window.platform === 'desktop' || window.platform === 'tablet') {
    appClassName = 'app'
    contentsStyle = { width: '980px'}
    list = <GridList
      data={require("json!../assets/json/categories.json")}
      text='This is a grid list'
      expanded={false}
      itemCount={8}
    />
  } else {
    appClassName = 'app smartphone'
    contentsStyle = { width: '100%'}
    list = <SliderList
      data={require("json!../assets/json/categories.json")}
      text='This is a slider list'
      itemCount={16}
    />
  }

  return (
    <div id='contents' className='#contents, .pageWrap' style={contentsStyle}>
      <div className={appClassName}>
        <Logo />
        {list}
        <InfoForm />
        <Popup active={false} />
      </div>
    </div>
  )
}

export default App
