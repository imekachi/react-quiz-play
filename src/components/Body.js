import React from 'react'
import InitPage from '../pages/InitPage'

const quizInfoStore = {
  quizCover: 'https://image.dek-d.com/27/0417/8523/124713378',
  timeLimit: true,
  timer    : {
    type     : 'each',
    limitTime: 15,
  },
}


class Body extends React.Component {

  render() {
    return (
      <div className="quiz-body">
        <InitPage {...quizInfoStore}/>
      </div>
    )
  }
}

export default Body