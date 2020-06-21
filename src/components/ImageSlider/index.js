import React from 'react';

import './index.css'



const ImageSlider =(props)=>{
  console.log('image slider render')
  const {url,urlNum} = props

  return(
    <div className ="image-slider">

        <div>
          <img alt="food" className="food-imgs" src={url[urlNum]} />
        </div>

    </div>
  )
}

export default ImageSlider
