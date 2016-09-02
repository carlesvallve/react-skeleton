require('./style.scss');
import React, { Component } from 'react'


const Footer = ({ style }) => {
  return(
    <div id="footer--fixed" className="footer--fixed" style={style}>
        <div className="footer--fixed-wrap footer--fixed-wrap--black clearfix">
            <div className="footer--fixed-container">
                <div className="footer--fixed-logo">
                    <img className="footer--fixed-logo-img" src="/assets/img/special/landing_pages/common/r18-logo-gray.png" alt="" />
                </div>
            </div>
            <p className="footer--fixed-text copyright">Copyright © since 2014 - R18.com - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
