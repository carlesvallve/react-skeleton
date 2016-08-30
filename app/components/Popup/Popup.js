require('./style.scss');
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { openPopup, closePopup } from '../../actions'

// TODO:
// Convert to class and implement open/close methods -> OK!
// Freeze scroll when popup opens
// Implement video pause/resume when closing and reopening same thumb -> OK!


const mapStateToProps = (state, ownProps) => {
  if (state.popup.active === undefined) {
    state.popup.active = ownProps.active
  }

  return state.popup
}


class Popup extends Component {

  constructor() {
    super()

    this.lastVideoPath = null;
    this.videoTime = 0;

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  componentDidUpdate() {
    if (this.props.active === true) {
      this.openPopup();
    }
  }

  openPopup() {
    // disable scroll
    const body = document.body;
    body.style.overflow = 'hidden';
    body.style.marginRight = '15px';

    // update video
    if (this.refs.video !== undefined) {
      if (this.videoPath === this.lastVideoPath) {
        this.refs.video.currentTime = this.videoTime;
      }
      this.refs.video.play();
    }
  }

  closePopup() {
    // enable scroll
    const body = document.body;
    body.style.overflow = 'auto';
    body.style.marginRight = '0';

    // record video references
    if (this.refs.video !== undefined) {
      this.refs.video.pause();
      this.lastVideoPath = this.videoPath
      this.videoTime = this.refs.video.currentTime;
    }
  }

  render() {
    if (this.props.active === false) {
      this.closePopup()
      return <div />
    }

    this.videoPath = 'https://kaigaiad.hs.llnwd.net/v1/lp/videos/summer16/' + this.props.data.id + '.mp4';
    const imgPath = '//pics.r18.com/digital/video/' + this.props.data.id + '/' + this.props.data.id + 'ps.jpg';
    const buttonLink = '//www.r18.com/videos/vod/movies/detail/-/id=' + this.props.data.id + '/'
    const buttonDataRef = '//www.r18.com/videos/vod/movies/detail/-/id=' + this.props.data.id + '/'
    const textTitle = this.props.data.title[window.lang]
    const textActress = this.props.data.actress[window.lang]
    const textPrice = "¥" + this.props.data.price;
    const textButton = window.content.getmovieat[window.lang] + ' 50% OFF'

    return (
      <div className='popup' style={{ display: this.props.active ? 'block' : 'none' }}>
        <div className='popup-bg' onClick={e => {
          e.stopPropagation()
          this.props.dispatch(closePopup())
        }}>
          <div
            className='popup-box'
            onClick={e => {
              e.stopPropagation()
            }}>

            <div className='popup-content'>

              <div className='popup-video'>
                <video ref={'video'} src={this.videoPath} controls="true">
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
}

Popup = connect(mapStateToProps,  null)(Popup)

export default Popup



// class Popup extends Component {
//
//   constructor(props) {
//     super(props)
//
//     if (this.props.data === undefined) {
//       return <div />
//     }
//
//     this.videoPath = 'https://kaigaiad.hs.llnwd.net/v1/lp/videos/summer16/' + this.props.data.id + '.mp4';
//     this.imgPath = '//pics.r18.com/digital/video/' + this.props.data.id + '/' + this.props.data.id + 'ps.jpg';
//     this.buttonLink = '//www.r18.com/videos/vod/movies/detail/-/id=' + this.props.data.id + '/'
//     this.buttonDataRef = '//www.r18.com/videos/vod/movies/detail/-/id=' + this.props.data.id + '/'
//
//     this.textTitle = this.props.data.title[window.lang]
//     this.textActress = this.props.data.actress[window.lang]
//     this.textPrice = "¥" + this.props.data.price;
//     this.textButton = window.content.getmovieat[window.lang] + ' 50% OFF'
//   }
//
//   render() {
//     return (
//       <div className='popup' style={{ display: this.props.active ? 'block' : 'none' }}>
//         <div className='popup-bg' onClick={e => {
//           e.stopPropagation()
//           this.props.dispatch(closePopup())
//         }}>
//           <div
//             className='popup-box'
//             onClick={e => {
//               e.stopPropagation()
//             }}>
//
//             <div className='popup-content'>
//
//               <div className='popup-video'>
//                 <video src={this.videoPath} controls="true" autoPlay="autoplay">
//                   Your browser does not support the <code>video</code> element.
//               </video>
//               </div>
//
//               <div className='popup-bottom'>
//                 <img className="popup-img" src={this.imgPath} alt="" />
//                 <div className="popup-text popup-info">
//                   <dd>
//                     <p className="title">{this.textTitle}</p>
//                     <span className="actress-name">{this.textActress}</span>
//                     <span className="price">{this.textPrice}</span>
//                     <a className="btn-summer"
//                       href={this.buttonLink}
//                       data-ref={this.buttonDataRef}
//                       target="_blank">
//                       {this.textButton}
//                     </a>
//                   </dd>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
//
// }
//
// Popup = connect(mapStateToProps,  null)(Popup)
//
// export default Popup







// let Popup = ({ dispatch, active, data }) => {
//
//   if (data === undefined) {
//     return <div />
//   }
//
//   let videoPath = 'https://kaigaiad.hs.llnwd.net/v1/lp/videos/summer16/' + data.id + '.mp4';
//   let imgPath = '//pics.r18.com/digital/video/' + data.id + '/' + data.id + 'ps.jpg';
//   let buttonLink = '//www.r18.com/videos/vod/movies/detail/-/id=' + data.id + '/'
//   let buttonDataRef = '//www.r18.com/videos/vod/movies/detail/-/id=' + data.id + '/'
//
//   let textTitle = data.title[window.lang]
//   let textActress = data.actress[window.lang]
//   let textPrice = "¥" + data.price;
//   let textButton = window.content.getmovieat[window.lang] + ' 50% OFF'
//
//   return (
//     <div className='popup' style={{ display: active ? 'block' : 'none' }}>
//       <div className='popup-bg' onClick={e => {
//         e.stopPropagation()
//         dispatch(closePopup())
//       }}>
//         <div
//           className='popup-box'
//           onClick={e => {
//             e.stopPropagation()
//           }}>
//
//           <div className='popup-content'>
//
//             <div className='popup-video'>
//               <video src={videoPath} controls="true" autoPlay="autoplay">
//                 Your browser does not support the <code>video</code> element.
//             </video>
//             </div>
//
//             <div className='popup-bottom'>
//               <img className="popup-img" src={imgPath} alt="" />
//               <div className="popup-text popup-info">
//                 <dd>
//                   <p className="title">{textTitle}</p>
//                   <span className="actress-name">{textActress}</span>
//                   <span className="price">{textPrice}</span>
//                   <a className="btn-summer"
//                     href={buttonLink}
//                     data-ref={buttonDataRef}
//                     target="_blank">
//                     {textButton}
//                   </a>
//                 </dd>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// Popup = connect(mapStateToProps,  null)(Popup)
//
// export default Popup
