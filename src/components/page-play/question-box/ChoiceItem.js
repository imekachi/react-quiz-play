import React from 'react'

// UI
import ImgZoomable from '../ImgZoomable'
import { isValueEmpty } from '../../../util/empty'

export default class ChoiceItem extends React.Component {
  render() {

    if ( this.props.isFiller )
      return <div className="choice-item -grid-filler"/>

    return (
      <div className="choice-item" title={this.props.titleAttr}>
        <ImgZoomable className="img-box" src={this.props.img} renderAsBg={true} />
        <div className={!isValueEmpty(this.props.img) ? 'txt-box' : ''}>
          <input id={this.props.choiceId} className="formradio" type="radio"
                 name={`answer[${this.props.questionIndex}]`} value={this.props.value}/>
          <label htmlFor={this.props.choiceId} className="radiolabel">{this.props.titleHtml}</label>
        </div>
      </div>
    )
  }
}