import React from 'react'
import { classNames } from '../util/string'

const AutoShareBox = (props) => (
  <div id={props.id} className={classNames('remark-box', props.className || '')}>

    {props.forceUnchecked ? (
      '*ยังไม่แชร์ผลลัพธ์ไปยัง Facebook'
    ) : (
       <div className="autoshare-wrapper">
         <input type="checkbox" className="formcheckbox sharecheckbox" id={props.id} onChange={props.onChange}/>
         <label htmlFor={props.id} className="checkboxlabel">แชร์ผลลัพธ์ไปยัง Facebook</label>
       </div>
     )}

  </div>
)

export default AutoShareBox