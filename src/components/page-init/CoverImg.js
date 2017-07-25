import React from 'react'
import ImageBg from '../ImageBg'

const CoverImg = (props) => (
  <div className="thumb-img">
    <ImageBg className="image" src={props.src}/>
  </div>
)

export default CoverImg