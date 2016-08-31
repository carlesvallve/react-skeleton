require('./style.scss');
import React, { Component } from 'react'


const Banner = () => {

  return(
      <div className='banner-top'>
          <a
            className='banner-top-button'
            href='http://www.r18.com/videos/vod/movies/list/id=10000084/pagesize=120/price=all/sort=popular/type=category/page=1/'
          >
            <span>{window.content.btn_banner_top[window.lang]}</span>
          </a>
      </div>
  )
}

export default Banner


// <div className='features'>
//   <ul className='featurelist'>
//     <li><span>{window.content.banner.items.item1[window.lang]}</span></li>
//     <li><span>{window.content.banner.items.item2[window.lang]}</span></li>
//     <li><span>{window.content.banner.items.item3[window.lang]}</span></li>
//     <li><span>{window.content.banner.items.item4[window.lang]}</span></li>
//   </ul>
// </div>
//
// <div className='banner-signup'>
//   <a
//     className='banner-btn-signup btn-summer'
//     href='http://www.r18.com/videos/vod/movies/list/id=10000084/pagesize=120/price=all/sort=popular/type=category/page=1/'
//   >
//     <span>{window.content.banner.btn_signup[window.lang]}</span>
//   </a>
// </div>
//
// <div className='banner-text-signup'>{window.content.banner.text_signup[window.lang]}</div>
