require('./style.scss');
import React, { Component } from 'react'
import Thumb from '../Thumb/Thumb'

import { connect } from 'react-redux'
import { refreshList } from '../../../actions'


const mapStateToProps = (state, ownProps) => {
  if (state.gridlist.itemCount === undefined) {
    state.gridlist.itemCount = ownProps.itemCount
  }

  //state.gridlist.data = ownProps.data;

  console.log('mapStateToProps', state.gridlist)
  return state.gridlist
}


let GridList = ({ dispatch, data, text, percentage, itemCount }) => {

  if (data === null) {
    itemCount = 0;
  }

  var thumbs = [];
  const columns = 4
  const w = ((90) / columns) - 0.5;

  for (var i = 0; i < itemCount; i++) {
    thumbs.push(<Thumb key={i} width={w + '%'} data={data.items[i]} />)
  }

  console.log('gridlist: ', itemCount, data);

  return (
    <div className='gridlist'>

      <div className='gridlist-title'>
        <span className='gridlist-title-text'>{text}</span>
        <pan className='gridlist-title-percentage'>{percentage}</pan>
      </div>

      <div id='scroller' className='gridlist-scroller'>
        <ul id='list' className='gridlist-list'>
          {thumbs}
        </ul>
      </div>

      <a
        className='btn-summer'
        href='http://www.r18.com/videos/vod/movies/list/id=10000084/pagesize=120/price=all/sort=popular/type=category/page=1/'
        onClick={e => {
          if (itemCount  <= 8) {
            e.preventDefault()
          }
          e.stopPropagation()
          dispatch(refreshList(16, data))
        }}>
        {
          itemCount <= 8 ?
          window.content.btn_more_titles[window.lang] :
          window.content.btn_all_titles[window.lang]
        }
      </a>
    </div>
  )
}

GridList = connect(mapStateToProps, null)(GridList)

export default GridList

// <div
//   className='btn-summer'
//   onClick={e => {
//     e.stopPropagation()
//     dispatch(itemCount <= 8 ? refreshList(16) : refreshList(8))
//   }}>
//   {textButton}
// </div>
