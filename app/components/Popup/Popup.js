import React, { Component } from 'react'
var ReactDOM = require('react-dom');
require('./style.scss');

export default class Popup extends Component {

  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }
  }

  open() {
    console.log('open');
    this.setState({ visible: true });
  }

  close() {
    console.log('close');
    this.setState({ visible: false });
  }

  render() {
    let style={ display: this.state.visible ? 'block' : 'none' }

    return (
      <div className='popup' style={style} >
        <div className='popup-bg' onClick={e => {
          e.preventDefault()
          this.close();
        }}>
          <div className='popup-box' />
        </div>

      </div>
    )
  }
}
