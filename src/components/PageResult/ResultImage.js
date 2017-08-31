import React from 'react'
import ImageBg from '../ImageBg'

const ResultImage = ({ src }) => (
  <div className="result-img">
    <ImageBg src={src}/>
  </div>
)

export default ResultImage