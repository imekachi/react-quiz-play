import React from 'react'

// UI

const quizHeaderInfo = {
  quizCover  : 'https://image.dek-d.com/27/0316/3511/121767933',
  titleAttr  : 'คุณจะได้เดบิวต์อยู่วงไหน?',
  titleHtml  : 'คุณจะได้เดบิวต์อยู่วงไหน?',
  description: 'มาดูกัน คุณจะได้อยู่วงไหนนะ หรือสามารถเล่นควิซนี้ ในรูปแบบควิซทายใจได้ที่ https://www.dek-d.com/quiz/funnyquiz/303796/',
  category   : {
    text: 'ทายนิสัย',
    link: 'https://www.dek-d.com/quiz/all/habit/',
  },
  stats      : {
    play   : 480,
    like   : 0,
    dislike: 0,
  },
  owner      : {
    username: 'iammaimai',
    alias   : 'iammaimai',
    link    : 'https://my.dek-d.com/iammaimai/',
  },
}
export default class QuizApp extends React.Component {

  render() {
    return (
      <div className="quiz-wrapper">
        <div className="quiz-container">
          
        </div>
      </div>
    )
  }
}
