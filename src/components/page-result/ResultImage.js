import React from 'react'
import ImageBg from '../ImageBg'

const ResultImage = (props) => (
  <div className="result-img">
    <ImageBg src={props.src}/>
  </div>
)

export default ResultImage