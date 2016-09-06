require('./style.scss');

import React from 'react'
import { SetLanguage, SetPlatform, SetCookieState, SetData } from './Utils/Utils'

import Header from './Header/Header'
import Footer from './Footer/Footer'

import GridList from './List/GridList/GridList'
import SliderList from './List/Sliderlist/Sliderlist.js';
import Popup from './Popup/Popup'
import BannerTop from './BannerTop/BannerTop'
import BannerBottom from './BannerBottom/BannerBottom'

import { connect } from 'react-redux'
import { refreshList } from '../actions'


let App = ({ dispatch }) => {

  // config application

  SetLanguage();
  SetPlatform();

  SetData (16,
    function (data) {
      // data was retrieved from api
      dispatch(
        refreshList(
          window.platform === 'smartphone' ? 16 : 8,
          data
        )
      )
    },
    function () {
      // something went wrong, maybe we should fallback to hardcoded categories (?)
      dispatch(
        refreshList(
          window.platform === 'smartphone' ? 16 : 8,
          require("json!../assets/json/categories.json")
        )
      )
    }
  );


  // set elements depending on platform

  let list, appClassName, contentsStyle;

  if (window.platform === 'desktop' || window.platform === 'tablet') {
    appClassName =
    window.platform === 'tablet' ?
    'app tablet ' + window.lang :
    'app ' + window.lang

    list = <GridList
      data={null}
      text={window.content.gridlist_title[window.lang]}
      percentage={window.content.list_percentage[window.lang]}
      expanded={false}
      itemCount={8}
    />
  } else {
    appClassName = 'app smartphone ' + window.lang
    list = <SliderList
      data={null}
      text={window.content.sliderlist_title[window.lang]}
      percentage={window.content.list_percentage[window.lang]}
      itemCount={16}
    />
  }


  // render application elements

  var fixedStyles = SetCookieState();

  return (
    <div id='contents' className='#contents, .pageWrap'>
      <div id='app' className={appClassName}>
        <Header style={fixedStyles.header} />
        <BannerTop />
        {list}
        <BannerBottom />
        <Footer style={fixedStyles.footer} />
        <Popup active={false} />
      </div>
    </div>
  )
}

App = connect()(App)

export default App
