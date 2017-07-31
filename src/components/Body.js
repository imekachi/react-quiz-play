import React from 'react'
import InitPage from '../pages/InitPage'
import PlayPage from '../pages/PlayPage'

const quizInfoStore = {
  quizCover: 'https://image.dek-d.com/27/0417/8523/124713378',
  timeLimit: true,
  timer    : {
    type     : 'each',
    limitTime: 15,
  },
}

class Body extends React.Component {

  getDisplayPage() {
    switch (this.props.quizUIStore.appState) {
      case 'play': {
        return (<PlayPage/>)
      }

      default: {
        return (<InitPage {...quizInfoStore}/>)
      }
    }
  }

  render() {
    return (
      <div className="quiz-body -singlequestion">
        {this.getDisplayPage()}
      </div>
    )
  }
}

export default Body