import React from 'react'

const AutoShareBox = (props) => (
  <div {...props} className={`remark-box ${props.className || ''}`}>
    <span className="autoshare-wrapper">
      <input type="checkbox" className="formcheckbox sharecheckbox" id={props.id}/>
      <label htmlFor={props.id} className="checkboxlabel">แชร์ผลลัพธ์ไปยัง Facebook</label>
    </span>
  </div>
)

export default AutoShareBox