//import AddTodo from '../containers/AddTodo'
//import VisibleTodoList from '../containers/VisibleTodoList'
//import Footer from './Footer'
// <AddTodo />
// <VisibleTodoList />
// <Footer />

require('../css/stylesheet.scss');
import React from 'react'
import { SetLanguage, SetPlatform } from './Utils/Utils'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Logo from './Logo/Logo'
import GridList from './List/GridList/GridList'
import SliderList from './List/Sliderlist/Sliderlist.js';
//import InfoForm from './InfoForm/InfoForm'
import Popup from './Popup/Popup'

import BannerTop from './BannerTop/BannerTop'
import Banner from './Banner/Banner'


const App = () => {

  // config application

  SetLanguage();
  SetPlatform();


  // set elements depending on platform

  let list, appClassName, contentsStyle;

  if (window.platform === 'desktop' || window.platform === 'tablet') {
    appClassName = 'app'
    //contentsStyle = { width: '980px'}
    list = <GridList



      data={require("json!../assets/json/categories.json")}
      text='Best deals today! Titles up to'
      percentage='60%OFF'
      expanded={false}
      itemCount={8}
    />
  } else {
    appClassName = 'app smartphone'
    //contentsStyle = { width: '100%'}
    list = <SliderList
      data={require("json!../assets/json/categories.json")}
      text='Hundreds of titles on sale! Big deals up to 60% off!'
      itemCount={16}
    />
  }


  // render application elements

  return (
    <div id='contents' className='#contents, .pageWrap' style={contentsStyle}>
      <div className={appClassName}>
        <Header />
        <BannerTop />
        {list}
        <Banner />
        <Footer/>
        <Popup active={false} />
      </div>
    </div>
  )
}

export default App
