import React from 'react'

const uiStore = {
  autoshare: false
}

export default class ActionBox extends React.Component {
  render() {
    return (
      <div className="action-button-box">



        <div className="remark-box">
          <input type="checkbox" className="formcheckbox sharecheckbox" id="autoshare"/>
          <label htmlFor="autoshare" className="checkboxlabel">แชร์ผลลัพธ์ไปยัง Facebook</label>
        </div>
      </div>
    )
  }
}