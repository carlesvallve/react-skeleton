require('./style.scss');
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { openPopup, closePopup } from '../../actions'

// TODO:
// Convert to class and implement open/close methods
// Freeze scroll when popup opens
// Implement video pause/resume when closing and reopening same thumb


const mapStateToProps = (state, ownProps) => {
  if (state.popup.active === undefined) {
    state.popup.active = ownProps.active
  }

  return state.popup
}


let Popup = ({ dispatch, active, data }) => {

  if (data === undefined) {
    return <div />
  }

  let videoPath = 'https://kaigaiad.hs.llnwd.net/v1/lp/videos/summer16/' + data.id + '.mp4';
  let imgPath = '//pics.r18.com/digital/video/' + data.id + '/' + data.id + 'ps.jpg';
  let buttonLink = '//www.r18.com/videos/vod/movies/detail/-/id=' + data.id + '/'
  let buttonDataRef = '//www.r18.com/videos/vod/movies/detail/-/id=' + data.id + '/'

  let textTitle = data.title[window.lang]
  let textActress = data.actress[window.lang]
  let textPrice = "¥" + data.price;
  let textButton = window.content.getmovieat[window.lang] + ' 50% OFF'

  return (
    <div className='popup' style={{ display: active ? 'block' : 'none' }}>
      <div className='popup-bg' onClick={e => {
        e.stopPropagation()
        dispatch(closePopup())
      }}>
        <div
          className='popup-box'
          onClick={e => {
            e.stopPropagation()
          }}>

          <div className='popup-content'>

            <div className='popup-video'>
              <video src={videoPath} controls="true" autoPlay="autoplay">
                Your browser does not support the <code>video</code> element.
            </video>
            </div>

            <div className='popup-bottom'>
              <img className="popup-img" src={imgPath} alt="" />
              <div className="popup-text popup-info">
                <dd>
                  <p className="title">{textTitle}</p>
                  <span className="actress-name">{textActress}</span>
                  <span className="price">{textPrice}</span>
                  <a className="btn-summer"
                    href={buttonLink}
                    data-ref={buttonDataRef}
                    target="_blank">
                    {textButton}
                  </a>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Popup = connect(mapStateToProps,  null)(Popup)

export default Popup
