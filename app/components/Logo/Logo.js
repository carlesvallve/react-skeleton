require('./style.scss');
import React, { Component } from 'react'


const Logo = () => {

  return(
    <div className='logo'>

      <a
        className='btn-summer btn-logo'
        href='http://www.r18.com/videos/vod/movies/list/id=10000084/pagesize=120/price=all/sort=popular/type=category/page=1/'
      >
        <span>{window.content.movies800[window.lang]}</span>
        <span className='u-fColor--deepred'> 50% OFF </span>
      </a>
    </div>
  )
}

export default Logo
