import React from 'react'

import { combineClassNames } from '../util/string'

const ImageBg = (props) => (
  <div className={combineClassNames('image', props.className)} title={props.title}
       style={{ ...props.style, backgroundImage: `url(${props.src})` }}/>
)

export default ImageBg