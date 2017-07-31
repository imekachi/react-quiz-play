import React from 'react'

const ImgZoomable = (props) => {
  return (
    <div className={`img-zoomable ${props.className}`}>
      <img className="image" src={props.src} alt={props.alt}/>
      <a className="zoombutton" title="ดูรูปขยาย">
        <i className="fa fa-search-plus" aria-hidden={true}/> ดูรูปขยาย
      </a>
    </div>
  )
}

export default ImgZoomable