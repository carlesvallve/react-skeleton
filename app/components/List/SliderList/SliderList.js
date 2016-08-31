require('./style.scss');
import React, { Component } from 'react'
import Swiper from 'swiper';
import Thumb from '../Thumb/Thumb'


class SliderList extends Component {

  constructor(props) {
    super(props);

    this.thumbs = [];
    const w = screen.width * 50 / 100;

    for (var i = 0; i < this.props.itemCount; i++) {
      this.thumbs.push(<Thumb key={i} width={w + 'px'} data={this.props.data[i]} />)
    }
  }

  componentDidMount() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      visibilityFullFit: true,
      autoResize: false,
      setWrapperSize: true,
      spaceBetween: 20,
      loop: true,
      centeredSlides: true
    })
  }

  render() {
    return (
      <div className='gridlist categories-list'>

        <div className='swiper-container'>
          <ul className='swiper-wrapper'>
            {this.thumbs}
          </ul>
        </div>

        <div className='gridlist-title'>
          <span className='gridlist-title-text'>{window.content.gridlist_title[window.lang]}</span>
          <span className='gridlist-title-percentage'>{window.content.gridlist_percentage[window.lang]}</span>
        </div>

        <a
          className='btn-summer'
          href='http://www.r18.com/videos/vod/movies/list/id=10000084/pagesize=120/price=all/sort=popular/type=category/page=1'>
          <span>{window.content.btn_all_titles[window.lang]}</span>
        </a>

      </div>
    )
  }
}

export default SliderList

// <div className='gridlist-title'>
//   <span className='gridlist-title-text'>
//     {window.content.gridlist_title[window.lang]}
//   </span>
// </div>
