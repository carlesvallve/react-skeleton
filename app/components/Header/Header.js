require('./style.scss');
import React, { Component } from 'react'


const Header = ({ style }) => {
  return(
    <div className="header--fixed" style={style}>
        <div className="header-container">
            <div className="header-logo">
                <img src="/assets/img/special/hot-sales/logos/R18-logo.png" alt="" />
            </div>
            <p className="no1txt">{window.content.header[window.lang]}</p>
            <a className="btn-signup"
                href="http://www.r18.com/videos/vod/movies/list/id=10000084/pagesize=120/price=all/sort=popular/type=category/page=1/">
                {window.content.signup[window.lang]}
            </a>
        </div>
    </div>
  )
}

export default Header
