require('./style.scss');
import React, { Component } from 'react'
import Thumb from '../Thumb/Thumb'

import { connect } from 'react-redux'
import { refreshList } from '../../../actions'


const mapStateToProps = (state, ownProps) => {
  if (state.gridlist.itemCount === undefined) {
    state.gridlist.itemCount = ownProps.itemCount
  }

  return state.gridlist
}


let GridList = ({ dispatch, data, text, itemCount }) => {

  const columns = 4
  const textButton = itemCount > 8 ? 'See Less' : 'See more'

  var thumbs = [];
  const w = ((90) / columns) - 0.5;

  for (var i = 0; i < itemCount; i++) {
    thumbs.push(<Thumb key={i} width={w + '%'} data={data[i]} />)
  }

  return (
    <div className='gridlist'>

      <div className='gridlist-title'>
        <span className='gridlist-title-text'>{text}</span>
      </div>

      <div id='scroller' className='gridlist-scroller'>
        <ul id='list' className='gridlist-list'>
          {thumbs}
        </ul>
      </div>

      <div
        className='btn-summer'
        onClick={e => {
          e.stopPropagation()
          dispatch(itemCount <= 8 ? refreshList(16) : refreshList(8))
        }}>
        {textButton}
      </div>

    </div>
  )
}

GridList = connect(mapStateToProps, null)(GridList)

export default GridList
