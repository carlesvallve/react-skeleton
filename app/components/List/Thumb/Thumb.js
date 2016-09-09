require('./style.scss');
import React, { Component } from 'react'


class Thumb extends Component {

  constructor(props) {
    super(props)

    this.resizePic.bind(this);

    let data = this.props.data;
    if (data == null) {
      data = {
        title: "",
        content_id: "",
        price: ""
      };
    }

    this.path =
      'url(http://pics.r18.com/digital/video/' +
      data.content_id + '/' +
      data.content_id + 'pl.jpg)'

    this.style = { width: this.props.width }
    this.title = data.title //[window.lang]

    this.actress = '';
    if (data.hasOwnProperty('actress')) {
      this.actress = data.actress[Object.keys(data.actress)[0]];
    }

    this.price = data.price_local === '' ? '' : data.price_local + ' ' + window.currency;
    this.buttonLink = '//www.r18.com/videos/vod/movies/detail/-/id=' + data.content_id + '/'
  }


  resizePic() {
    // get pic element reference
    var pic = this.refs['pic']
    var thumb = this.refs['thumb']

    if (pic) {
      // resize pic
      const width = thumb.offsetWidth //pic.offsetWidth;
      const height = width * 1.42;
      pic.style.width = width + 'px';
      pic.style.height = height + 'px';

      // store global var to resize gradient on sliderlist
      window.thumbHeight = height + 74;
    }
  }


  componentDidMount() {
    this.resizePic();

    let self = this;
    window.addEventListener('orientationchange', function () {
      window.setTimeout(function() {
        self.resizePic();
      }, 1)
    });
  }

  componentWillUnmount() {
  }

  render() {
    this.resizePic();

    return (
      <li id='thumb'
        ref='thumb'
        className='swiper-slide'
        style={this.style}
        onClick={e => {
          this.props.onClick(e, this.props.data)
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
            href={this.buttonLink}
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

export default Thumb
