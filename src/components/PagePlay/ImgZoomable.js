import React from 'react'

import { isValueEmpty } from '../../util/empty'
import ImageBg from '../ImageBg'

const ImgZoomable = (props) => {

  if (isValueEmpty(props.src))
    return null

  return (
    <div className={`img-zoomable ${props.className}`}>
      { props.renderAsBg ?
        (<ImageBg src={props.src} />)
        :
        (<img className="image" src={props.src} alt={props.alt}/>)
      }

      <a className="zoombutton" title="ดูรูปขยาย">
        <i className="fa fa-search-plus" aria-hidden={true}/> ดูรูปขยาย
      </a>
    </div>
  )
}

export default ImgZoomable