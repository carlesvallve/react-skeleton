require('./style.scss');
import React, { Component } from 'react'


const Banner = () => {

  return(
      <div className='banner-top'>
          <a
            className='banner-top-button'
            href = 'http://www.r18.com/common/search/price_max=sale/'
          >
            <span>{window.content.btn_banner_top[window.lang]}</span>
          </a>
      </div>
  )
}

export default Banner
