import React from 'react'

const AutoShareBox = (props) => (
  <div className={ `remark-box ${props.className}`}>
    <input type="checkbox" className="formcheckbox sharecheckbox" id={props.id}/>
    <label htmlFor={props.id} className="checkboxlabel">แชร์ผลลัพธ์ไปยัง Facebook</label>
  </div>
)

export default AutoShareBox