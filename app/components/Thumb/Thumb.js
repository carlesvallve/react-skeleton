import React, { Component } from 'react'
var ReactDOM = require('react-dom');
require('./style.scss');


const Thumb = (props) => {
  const path = '//pics.r18.com/digital/video/' + props.data.id + '/' + props.data.id + 'ps.jpg';
  const style = { width: props.width + '%' }

  const title = props.data.title[window.lang];
  const actress = props.data.actress[window.lang].split(',')[0];

  return (
    <li id='thumb' className='swiper-slide' style={style}>

      <div id='thumb-image' className='thumb-image'>
        <img src={path} alt='Smiley face' width='100%' />
        <div className='thumb-play-icon' />
      </div>

      <div className='thumb-info'>
        <div className='thumb-title'>{title}</div>
        <div className='thumb-name'>{actress}</div>
      </div>

    </li>
  )
}

export default Thumb
