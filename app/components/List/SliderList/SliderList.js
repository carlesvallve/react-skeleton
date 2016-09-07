require('./style.scss');
import React, { Component } from 'react'
import Swiper from 'swiper';
import Thumb from '../Thumb/Thumb'

import { connect } from 'react-redux'
import { refreshList } from '../../../actions'


const mapStateToProps = (state, ownProps) => {
  if (state.gridlist.itemCount === undefined) {
    state.gridlist.itemCount = ownProps.itemCount
  }

  return state.gridlist
}


class SliderList extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  // this happens tight after render
  componentDidUpdate() {
    // initialize swiper
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      visibilityFullFit: true,
      autoResize: false,
      setWrapperSize: true,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      onSlideChangeEnd: function (s) { s.fixLoop(); }
    })

    // adjust gradient dimensions
    const gradient = this.refs['gradient']
    const h = window.thumbHeight + 'px'
    gradient.style.height = h
    gradient.style.marginTop = '-' + h;
  }

  render() {
    let itemCount = this.props.itemCount;
    let data = this.props.data;
    const text = this.props.text
    const percentage = this.props.percentage
    //console.log('sliderlist is updating:', data);

    if (data === null) {
      itemCount = 0;
    }

    this.thumbs = [];
    const w = screen.width * 50 / 100;

    for (var i = 0; i < itemCount; i++) {
      this.thumbs.push(<Thumb key={i} width={w + 'px'} data={data.items[i]} />)
    }

    return (
      <div ref='list' className='gridlist categories-list'>

        <div className='swiper-container'>
          <ul className='swiper-wrapper'>
            {this.thumbs}
          </ul>
          <div ref='gradient' className='swiper-gradient' />
        </div>

        <div className='gridlist-title'>
          <span className='gridlist-title-text'>{text}</span>
          <span className='gridlist-title-percentage'>{percentage}</span>
        </div>

        <a
          className='btn-summer'
          href = 'http://www.r18.com/common/search/price_max=sale/'
        >
          <span>{window.content.btn_all_titles[window.lang]}</span>
        </a>

      </div>
    )
  }
}

SliderList = connect(mapStateToProps, null)(SliderList)

export default SliderList
