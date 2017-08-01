import React from 'react'
import InitPage from '../pages/InitPage'
import PlayPage from '../pages/PlayPage'

const quizInfoStore = {
  quizCover   : 'https://image.dek-d.com/27/0417/8523/124713378',
  timeLimit   : true,
  timer       : {
    type     : 'each',
    limitTime: 15,
  },
  questionData: {
    questionCount  : 2,
    questionPerPage: 1,
    questionList   : [
      {
        number     : 1,
        titleAttr  : 'เปาบุ้นจิ้นชอบกินไข่เต่า ส่วนจั่นเจาชอบกินลูกอมอะไร?',
        titleHtml  : 'เปาบุ้นจิ้นชอบกินไข่เต่า ส่วนจั่นเจาชอบกินลูกอมอะไร?',
        questionImg: 'https://www0.dek-d.com/assets/quiz/images/default-quiz-cover.png',
      },
      {
        number   : 2,
        titleAttr: 'ลูกอมโบตัน ยาสีฟัน...',
        titleHtml: 'ลูกอมโบตัน ยาสีฟัน...',
      },
    ],
  },
  choiceData  : [
    {
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
          titleHtml: 'เต้าเจี้ยว',
          titleAttr: 'เต้าเจี้ยว',
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

class Body extends React.Component {

  getDisplayPage() {
    switch (this.props.quizUIStore.appState) {
      case 'play': {
        return (<PlayPage questionData={quizInfoStore.questionData} choiceData={quizInfoStore.choiceData}/>)
      }

      default: {
        return (<InitPage {...quizInfoStore}/>)
      }
    }
  }

  render() {
    return (
      <div className={`quiz-body ${ quizInfoStore.questionData.questionPerPage === 1 ? '-singlequestion' : ''}`}>
        {this.getDisplayPage.call(this)}
      </div>
    )
  }
}

export default Body