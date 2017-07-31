import React from 'react'

import QuestionBox from './QuestionBox'

export default class QuestionStream extends React.Component {
  render() {
    return (
      <div className="question-stream">
        <div className="question-page">
            <QuestionBox/>
        </div>
      </div>
    )
  }
}