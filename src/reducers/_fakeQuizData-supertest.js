import { TIMER_TYPES } from '../constants/quiz'

export const fakeQuizInfo = {
  id          : 58518,
  quizType    : 'supertest',
  quizCover   : 'https://image.dek-d.com/27/0417/8523/124713378',
  description : 'ทุกคนต้องเคยร้องแน่นอน',
  isNotFound  : false,
  isAccessible: true,
}

export const fakeQuizData = {
  questionPerPage: 100,
  questionList   : [
    {
      questionData: {
        number     : 1,
        titleAttr  : 'เปาบุ้นจิ้นชอบกินไข่เต่า ส่วนจั่นเจาชอบกินอะไร?',
        titleHtml  : 'เปาบุ้นจิ้นชอบกินไข่เต่า ส่วนจั่นเจาชอบกินอะไร?',
        questionImg: 'https://www0.dek-d.com/assets/quiz/images/default-quiz-cover.png',
      },
      choiceData  : {
        choiceLayout  : 'grid',
        choiceListData: [
          {
            value    : 1,
            isCorrect: false,
            titleHtml: 'ฮอลล์',
            titleAttr: 'ฮอลล์',
            img      : 'https://31.media.tumblr.com/bf9ce222e04be533787170858b2b7565/tumblr_mykmaqOlhy1rbka0co2_250.gif',
          },
          {
            value    : 2,
            isCorrect: true,
            titleHtml: 'โอเล่',
            titleAttr: 'โอเล่',
            img      : 'http://pa1.narvii.com/6394/c525a075254298ca4383940a6b93486422ac91ac_hq.gif',
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
    },
    {
      questionData: {
        number   : 2,
        titleAttr: 'ลูกอมโบตัน ยาสีฟัน...',
        titleHtml: 'ลูกอมโบตัน ยาสีฟัน...',
      },
      choiceData  : {
        questionNumber: 2,
        choiceLayout  : 'list',
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
    },
    {
      questionData: {
        number   : 3,
        titleAttr: 'ทดสอบ input แบบเติมคำตอบ ไม่ใช่ข้อสุดท้าย',
        titleHtml: 'ทดสอบ input แบบเติมคำตอบ ไม่ใช่ข้อสุดท้าย',
      },
      choiceData  : {
        choiceLayout  : 'typeanswer',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleHtml: 'เฉลยของพิมพ์ตอบ',
            titleAttr: 'เฉลยของพิมพ์ตอบ',
          },
        ],
      },
    },
    {
      questionData: {
        number   : 4,
        titleAttr: 'อะไรไม่รู้ว',
        titleHtml: 'อะไรไม่รู้ว',
      },
      choiceData  : {
        choiceLayout  : 'list',
        choiceListData: [
          {
            value    : 1,
            isCorrect: false,
            titleHtml: 'ฮอลล์',
            titleAttr: 'ฮอลล์',
          },
          {
            value    : 2,
            isCorrect: true,
            titleHtml: 'โอเล่',
            titleAttr: 'โอเล่',
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
        ],
      },
    },
    {
      questionData: {
        number   : 5,
        titleAttr: 'อะไรไม่รู้ว',
        titleHtml: 'อะไรไม่รู้ว',
      },
      choiceData  : {
        choiceLayout  : 'typeanswer',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleHtml: 'เฉลยของพิมพ์ตอบ',
            titleAttr: 'เฉลยของพิมพ์ตอบ',
          },
        ],
      },
    },
  ],
}

export const fakeQuizInfo2 = {
  id             : 58518,
  quizType       : 'supertest',
  quizCover      : 'https://image.dek-d.com/27/0417/8523/124713378',
  description    : 'ทุกคนต้องเคยร้องแน่นอน',
  isNotFound     : false,
  isAccessible   : true,
  isChallengeMode: true,
  timerData      : {
    type     : TIMER_TYPES.ALL,
    timeLimit: 15000,
  },
}

export const fakeQuizData2 = {
  questionPerPage: 100,
  questionList   : [
    {
      questionData: {
        number   : 1,
        titleAttr: 'ภาษาไทยเป็นภาษาประจำชาติอะไร',
        titleHtml: 'ภาษาไทยเป็นภาษาประจำชาติอะไร',
      },
      choiceData  : {
        choiceLayout  : 'list',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleAttr: 'ลาว',
            titleHtml: 'ลาว',
          },
          {
            value    : 2,
            isCorrect: false,
            titleAttr: 'พม่า',
            titleHtml: 'พม่า',
          },
          {
            value    : 3,
            isCorrect: false,
            titleAttr: 'ไทย',
            titleHtml: 'ไทย',
          },
        ],
      },
    },
    {
      questionData: {
        number   : 2,
        titleAttr: 'พยัญชนะภาษาไทยมีกี่ตัว',
        titleHtml: 'พยัญชนะภาษาไทยมีกี่ตัว',
      },
      choiceData  : {
        choiceLayout  : 'list',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleAttr: '48',
            titleHtml: '48',
          },
          {
            value    : 2,
            isCorrect: false,
            titleAttr: '40',
            titleHtml: '40',
          },
          {
            value    : 3,
            isCorrect: false,
            titleAttr: '44',
            titleHtml: '44',
          },
        ],
      },
    },
    {
      questionData: {
        number   : 3,
        titleAttr: 'ไตรยางค์ คือ อะไร',
        titleHtml: 'ไตรยางค์ คือ อะไร',
      },
      choiceData  : {
        choiceLayout  : 'list',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleAttr: 'อักษร 3 หมู่',
            titleHtml: 'อักษร 3 หมู่',
          },
          {
            value    : 2,
            isCorrect: false,
            titleAttr: 'พยัญชนะภาษาไทย',
            titleHtml: 'พยัญชนะภาษาไทย',
          },
          {
            value    : 3,
            isCorrect: false,
            titleAttr: 'สระภาษาไทย',
            titleHtml: 'สระภาษาไทย',
          },
        ],
      },
    },
    {
      questionData: {
        number   : 4,
        titleAttr: 'พยัญชนะควบกล้ำมีตัวอะไรบ้าง',
        titleHtml: 'พยัญชนะควบกล้ำมีตัวอะไรบ้าง',
      },
      choiceData  : {
        choiceLayout  : 'grid',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleAttr: 'ร ย อ',
            titleHtml: 'ร ย อ',
          },
          {
            value    : 2,
            isCorrect: false,
            titleAttr: 'ร ว ล',
            titleHtml: 'ร ว ล',
          },
          {
            value    : 3,
            isCorrect: false,
            titleAttr: 'ล ว อ',
            titleHtml: 'ล ว อ',
          },
          {
            value    : 4,
            isCorrect: false,
            titleAttr: 'ก ข ค',
            titleHtml: 'ก ข ค',
          },
        ],
      },
    },
    {
      questionData: {
        number   : 5,
        titleAttr: 'คำว่า"จริง"เป็นคำควบกล้ำแท้หรือไม่',
        titleHtml: 'คำว่า"จริง"เป็นคำควบกล้ำแท้หรือไม่',
      },
      choiceData  : {
        choiceLayout  : 'list',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleAttr: 'ควบกล้ำแท้',
            titleHtml: 'ควบกล้ำแท้',
          },
          {
            value    : 2,
            isCorrect: false,
            titleAttr: 'ควบกล้ำไม่แท้',
            titleHtml: 'ควบกล้ำไม่แท้',
          },
          {
            value    : 3,
            isCorrect: false,
            titleAttr: 'ไม่ใช่คำควบกล้ำ',
            titleHtml: 'ไม่ใช่คำควบกล้ำ',
          },
        ],
      },
    },
    {
      questionData: {
        number   : 6,
        titleAttr: 'อักษรสูงมีกี่ตัวอักษร',
        titleHtml: 'อักษรสูงมีกี่ตัวอักษร',
      },
      choiceData  : {
        choiceLayout  : 'list',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleAttr: '11',
            titleHtml: '11',
          },
          {
            value    : 2,
            isCorrect: false,
            titleAttr: '9',
            titleHtml: '9',
          },
          {
            value    : 3,
            isCorrect: false,
            titleAttr: '14',
            titleHtml: '14',
          },
        ],
      },
    },
    {
      questionData: {
        number   : 7,
        titleAttr: 'อักษรกลางมีกี่ตัวอักษร',
        titleHtml: 'อักษรกลางมีกี่ตัวอักษร',
      },
      choiceData  : {
        choiceLayout  : 'list',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleAttr: '11',
            titleHtml: '11',
          },
          {
            value    : 2,
            isCorrect: false,
            titleAttr: '9',
            titleHtml: '9',
          },
          {
            value    : 3,
            isCorrect: false,
            titleAttr: '14',
            titleHtml: '14',
          },
        ],
      },
    },
    {
      questionData: {
        number   : 8,
        titleAttr: 'อักษรต่ำมีกี่ตัวอักษร',
        titleHtml: 'อักษรต่ำมีกี่ตัวอักษร',
      },
      choiceData  : {
        choiceLayout  : 'list',
        choiceListData: [
          {
            value    : 1,
            isCorrect: true,
            titleAttr: '11',
            titleHtml: '11',
          },
          {
            value    : 2,
            isCorrect: false,
            titleAttr: '9',
            titleHtml: '9',
          },
          {
            value    : 3,
            isCorrect: false,
            titleAttr: '14',
            titleHtml: '14',
          },
        ],
      },
    },
  ],
}

export const fakeQuizResult = {}