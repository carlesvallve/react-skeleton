//import AddTodo from '../containers/AddTodo'
//import VisibleTodoList from '../containers/VisibleTodoList'
//import Footer from './Footer'
// <AddTodo />
// <VisibleTodoList />
// <Footer />

require('../css/stylesheet.scss');
import React from 'react'
import { SetLanguage, SetPlatform, SetData } from './Utils/Utils'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import Logo from './Logo/Logo'
import GridList from './List/GridList/GridList'
import SliderList from './List/Sliderlist/Sliderlist.js';
import Popup from './Popup/Popup'

import BannerTop from './BannerTop/BannerTop'
import Banner from './Banner/Banner'


import { connect } from 'react-redux'
import { refreshList } from '../actions'


let App = ({ dispatch }) => {

  // config application

  SetLanguage();
  SetPlatform();
  SetData (
    function (data) {
      // data was retrieved from api
      dispatch(
        refreshList(window.platform === 'smartphone' ? 16 : 8, data)
      )
    },
    function () {
      // something went wrong, so fallback to hardcoded categories
      // dispatch(
      //   refreshList(window.platform === 'smartphone' ? 16 : 8, require("json!../assets/json/categories.json"))
      // )
    }
  );


  // set elements depending on platform

  let list, appClassName, contentsStyle;

  if (window.platform === 'desktop' || window.platform === 'tablet') {
    appClassName = 'app'
    list = <GridList
      data={null}
      text='Best deals today! Titles up to'
      percentage='60%OFF'
      expanded={false}
      itemCount={8}
    />
  } else {
    appClassName = 'app smartphone'
    list = <SliderList
      data={null}
      text='Hundreds of titles on sale! Big deals up to 60% off!'
      itemCount={16}
    />
  }


  // render application elements

  return (
    <div id='contents' className='#contents, .pageWrap'>
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

App = connect()(App)

export default App
