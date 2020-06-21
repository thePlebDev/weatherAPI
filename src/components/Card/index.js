import React,{ useState,useEffect } from 'react';
import {useSpring, animated} from 'react-spring'

import ImageSlider from '../ImageSlider';

import './index.css'

const Card=(props)=>{
  console.log('card image render')
  const [imageIndex,setImageIndex]=useState(0)
  const [imageUrl, setImageUrl] = useState([
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
])

const stuff = useSpring({opacity:1, from:{opacity:0.4}})

  const previousSlide= ()=> {
    if(imageIndex===0){
      setImageIndex(imageUrl.length - 1)
      console.log(imageIndex)
    }else{
      setImageIndex(imageIndex - 1)
      console.log(imageIndex)
    }
  }

  const nextSlide= ()=> {
    if(imageIndex === imageUrl.length-1){
      setImageIndex(0)
    }else{
      setImageIndex(imageIndex + 1)
    }
  }

  useEffect(()=>{
    setTimeout(nextSlide,3000)
  })

  return(
    <div>
        <div className='card-containers fade'>
          < ImageSlider url={imageUrl} urlNum={imageIndex} />
        </div>
    </div>
  )
}

export default Card;
