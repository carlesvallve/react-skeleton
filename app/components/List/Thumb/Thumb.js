require('./style.scss');
import React, { Component } from 'react'
var ReactDOM = require('react-dom');

import { connect } from 'react-redux'
import { openPopup, closePopup } from '../../../actions'


class Thumb extends Component {

  constructor(props) {
    super(props)

    console.log('initializing thumb...')

    this.path =
      'url(//pics.r18.com/digital/video/' +
      this.props.data.id + '/' +
      this.props.data.id + 'pl.jpg)'
    this.style = { width: this.props.width }
    this.title = this.props.data.title[window.lang]
    this.actress = this.props.data.actress[window.lang].split(',')[0]
    this.price = '¥ ' + this.props.data.price;
    console.log(this.price);
  }

  componentDidMount() {
    // get pic element reference
    var pic = this.refs['pic']

    // resize pic
    const width = pic.offsetWidth;
    const height = width * 1.42;
    pic.style.width = width + 'px';
    pic.style.height = height + 'px';
  }

  render() {
    return (
      <li id='thumb'
        className='swiper-slide'
        style={this.style}
        onClick={e => {
          console.log('clicking on thumb...')
          e.stopPropagation()
          this.props.dispatch(openPopup(this.props.data))
        }}>

        <div id='thumb-image' className='thumb-image'>
          <div
            ref={'pic'}
            className='thumb-pic'
            style={{ backgroundImage: this.path }}
          />
        </div>

        <div className='thumb-play-icon' />
        <div className='thumb-price-sp'>{this.price}</div>

        <div className='thumb-info'>
          <div className='thumb-name'>{this.actress}</div>
          <div className='thumb-title'>{this.title}</div>
          <div className='thumb-price'>{this.price}</div>
          <a
            className='thumb-button'
            href='https://www.r18.com/my/cart/sp/checkout/cid=ipz00703/pid=ipz00703dl6/'
            onClick={e => {
              e.stopPropagation()
            }}>
            <span>{window.content.getmovie[window.lang]}</span>
          </a>
        </div>

      </li>
    )
  }
}

Thumb = connect()(Thumb)

export default Thumb
