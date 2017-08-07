import React from 'react'
import InitPage from '../pages/InitPage'
import PlayPage from '../pages/PlayPage'
import ResultPage from '../pages/ResultPage'
import { iF } from '../util/condition'
import { combineClassNames } from '../util/string'

const quizInfoStore = {
  quizType       : 'supertest',
  quizCover      : 'https://image.dek-d.com/27/0417/8523/124713378',
  isChallengeMode: true,
  timerData      : {
    isTimeLimited: true,
    type         : 'each',
    limitTime    : 15,
  },
  userInfo       : {
    profileImage: 'https://graph.facebook.com/100001207968554/picture?type=large',
    name        : 'Saran',
    score       : 10000,
  },
  questionData   : {
    questionCount  : 2,
    questionPerPage: 1,
    questionList   : [
      {
        number     : 1,
        titleAttr  : 'เปาบุ้นจิ้นชอบกินไข่เต่า ส่วนจั่นเจาชอบกินอะไร?',
        titleHtml  : 'เปาบุ้นจิ้นชอบกินไข่เต่า ส่วนจั่นเจาชอบกินอะไร?',
        questionImg: 'https://www0.dek-d.com/assets/quiz/images/default-quiz-cover.png',
      },
      {
        number   : 2,
        titleAttr: 'ลูกอมโบตัน ยาสีฟัน...',
        titleHtml: 'ลูกอมโบตัน ยาสีฟัน...',
      },
    ],
  },
  choiceData     : [
    {
      questionNumber: 1,
      choiceLayout  : 'list',
      choiceListData: [
        {
          value    : 1,
          isCorrect: false,
          titleHtml: 'ฮอลล์',
          titleAttr: 'ฮอลล์',
          img      : 'https://www0.dek-d.com/assets/quiz/images/default-quiz-cover.png',
        },
        {
          value    : 2,
          isCorrect: true,
          titleHtml: 'โอเล่',
          titleAttr: 'โอเล่',
          img      : 'https://lh5.googleusercontent.com/-NhXcZFMcn_I/UsIFGTZI1KI/AAAAAAAAASY/TiwNPATcpVU/s500-no/TaeyeonDookongLarge.gif',
        },
        {
          value    : 3,
          isCorrect: false,
          titleHtml: 'โอเลี้ยง',
          titleAttr: 'โอเลี้ยง',
        },
        {
          value    : 4,
          isCorrect: false,
          titleHtml: 'ไข่ตุ่น',
          titleAttr: 'ไข่ตุ่น',
        },
        {
          value    : 5,
          isCorrect: false,
          titleHtml: 'ไข่ตุ่น',
          titleAttr: 'ไข่ตุ่น',
        },
      ],
    },
    {
      questionNumber: 2,
      choiceLayout  : 'grid',
      choiceListData: [
        {
          value    : 1,
          isCorrect: true,
          titleHtml: 'คอลเกต',
          titleAttr: 'คอลเกต',
        },
        {
          value    : 2,
          isCorrect: false,
          titleHtml: 'ออรัล บี',
          titleAttr: 'ออรัล บี',
        },
        {
          value    : 3,
          isCorrect: false,
          titleHtml: 'อมยิ้ม',
          titleAttr: 'อมยิ้ม',
        },
        {
          value    : 4,
          isCorrect: false,
          titleHtml: 'เซนโซดาย',
          titleAttr: 'เซนโซดาย',
        },
      ],
    },
  ],
}

const resultData = {
  labelHeader    : '',
  image          : 'https://image.dek-d.com/27/0417/8523/124713378',
  header         : 'เยี่ยมไปเลย! คุณตอบถูก 7/7 ข้อ ( 5,465 คะแนน )',
  description    : 'ทุกคนต้องเคยร้องแน่นอน',
  descriptionLink: {
    url     : '#',
    textHtml: 'link อิอิ',
    textAttr: 'link อิอิ',
  },
}

class Body extends React.Component {

  getDisplayPage() {
    switch (this.props.appState) {
      case 'play': {
        return (<PlayPage {...quizInfoStore}/>)
      }

      case 'result': {
        return (<ResultPage quizType={quizInfoStore.quizType} {...resultData}/>)
      }

      default: {
        return (<InitPage {...quizInfoStore}/>)
      }
    }
  }

  render() {
    return (
      <div className={combineClassNames(
        'quiz-body',
        iF(quizInfoStore.questionData.questionPerPage === 1, '-singlequestion'),
      )}>
        {this.getDisplayPage.call(this)}
      </div>
    )
  }
}

export default Body