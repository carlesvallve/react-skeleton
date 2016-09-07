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

  // componentDidMount() {
  //   const list = this.refs['list']
  //   console.log(list);
  //
  //   list.addEventListener('mousewheel', function(event) {
  //     console.log('mousewheel')
  //
  //     // We don't want to scroll below zero or above the width and height
  //     var maxX = this.scrollWidth - this.offsetWidth;
  //     var maxY = this.scrollHeight - this.offsetHeight;
  //
  //     // If this event looks like it will scroll beyond the bounds of the element, prevent it and set the scroll to the boundary manually
  //     if (this.scrollLeft + event.deltaX < 0 ||
  //        this.scrollLeft + event.deltaX > maxX ||
  //        this.scrollTop + event.deltaY < 0 ||
  //        this.scrollTop + event.deltaY > maxY) {
  //
  //       event.preventDefault();
  //
  //       // Manually set the scroll to the boundary
  //       this.scrollLeft = Math.max(0, Math.min(maxX, this.scrollLeft + event.deltaX));
  //       this.scrollTop = Math.max(0, Math.min(maxY, this.scrollTop + event.deltaY));
  //     }
  //
  //   }, false)
  // }

  componentDidUpdate() {
    // this happens tight after render
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

    const gradient = this.refs['gradient']
    const h = window.thumbHeight + 'px'
    gradient.style.height = h
    gradient.style.marginTop = '-' + h;

    const list = this.refs['list']
    console.log(list);

    list.addEventListener('mousewheel', function(event) {
      // We don't want to scroll below zero or above the width and height
      var maxX = this.scrollWidth - this.offsetWidth;
      var maxY = this.scrollHeight - this.offsetHeight;
      console.log('mousewheel', maxX, maxY, this.scrollWidth, this.scrollHeight, this.offsetWidth, this.offsetHeight)

      // If this event looks like it will scroll beyond the bounds of the element, prevent it and set the scroll to the boundary manually
      if (this.scrollLeft + event.deltaX < 0 ||
         this.scrollLeft + event.deltaX > maxX ||
         this.scrollTop + event.deltaY < 0 ||
         this.scrollTop + event.deltaY > maxY) {

        event.preventDefault();

        // Manually set the scroll to the boundary
        this.scrollLeft = Math.max(0, Math.min(maxX, this.scrollLeft + event.deltaX));
        this.scrollTop = Math.max(0, Math.min(maxY, this.scrollTop + event.deltaY));
      }

    }, false)
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
