import { CSSTransitionGroup } from 'react-transition-group';
import React from 'react';

import './index.css'



const ImageSlider =(props)=>{

  const {url,urlNum} = props

  return(
    <div className ="image-slider">
      <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          <div className="image-container" >
            <img alt="food" className="food-imgs"  src={url[urlNum]} />
          </div>
      </CSSTransitionGroup>

    </div>
  )
}

export default ImageSlider
