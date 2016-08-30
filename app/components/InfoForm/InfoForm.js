require('./style.scss');
import React, { Component } from 'react'


const InfoForm = () => {

  return(
    <div className='infoform'>
      <div className='container'>
        <div className='features'>
          <h3>{window.content.infoform.title[window.lang]}</h3>
          <ul className='featurelist'>
            <li><span>{window.content.infoform.item1[window.lang]}</span></li>
              <li><span>{window.content.infoform.item2[window.lang]}</span></li>
              <li><span>{window.content.infoform.item3[window.lang]}</span></li>
              <li><span>{window.content.infoform.item4[window.lang]}</span></li>
              <li><span>{window.content.infoform.item5[window.lang]}</span></li>
              <li><span>{window.content.infoform.item6[window.lang]}</span></li>
              <li><span>{window.content.infoform.item7[window.lang]}</span></li>
          </ul>

          <a className='btn-signup'
            href='http://www.r18.com/videos/vod/movies/list/id=10000084/pagesize=120/price=all/sort=popular/type=category/page=1/'>
            {window.content.signup[window.lang]}
          </a>
        </div>
      </div>
    </div>

  )
}

export default InfoForm
