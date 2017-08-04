import React from 'react'

const ResultImage = (props) => (
  <div className="result-img">
    <div className="image" style={{backgroundImage: `url(${props.src})`}}/>
  </div>
)

export default ResultImage