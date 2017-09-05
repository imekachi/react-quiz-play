import React from 'react'

import { classNames } from '../util/string'

const ImageBg = (props) => (
  <div className={classNames('image', props.className)} title={props.title}
       style={{ ...props.style, backgroundImage: `url(${props.src})` }}/>
)

export default ImageBg