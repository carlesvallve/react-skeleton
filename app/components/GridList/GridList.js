import React, { Component } from 'react'
import Thumb from '../Thumb/Thumb'
require('./style.scss');


const GridList = (props) => {

    const columns = 4
    const itemCount = 8
    const w = ((90) / columns) - 0.5
    const h = 0

    var thumbs = [];
    for (var i = 0; i < itemCount; i++) {
      thumbs.push(<Thumb key={i} width={w} height={h} data={props.data[i]} />)
    }

    return (
      <div className='gridlist'>

        <h2 className='gridlist-title'>
          <span className='gridlist-title-text'>{props.text}</span>
        </h2>

        <div id='scroller' className='gridlist-scroller'>
          <ul id='list' className='gridlist-list'>
            {thumbs}
          </ul>
        </div>

      </div>
    )
}

export default GridList
