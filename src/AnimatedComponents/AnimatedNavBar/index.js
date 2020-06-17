import React from 'react'
import {useSpring,animated} from 'react-spring';

import './index.css'

const Word = ()=>{
  useSpring({config:{duration:250}})
  const props = useSpring({config:{duration:2000},opacity:1, from:{opacity:0}})
  return (
    <animated.div style={props}>
      <div className="words">WEATHER API</div>
    </animated.div>)
}

export default Word
