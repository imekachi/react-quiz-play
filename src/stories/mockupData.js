import { AUTH_FACEBOOK } from '../constants/auth'
import { QUIZ_STATES } from '../constants/quiz'

export const quizStore = {
  quizState : QUIZ_STATES.LOADING,
  quizInfo  : {
    id             : 58518,
    quizType       : 'supertest',
    quizCover      : 'https://image.dek-d.com/27/0417/8523/124713378',
    description    : 'ทุกคนต้องเคยร้องแน่นอน',
    isNotFound     : false,
    isAccessible   : true,
    isChallengeMode: false,
    timerData      : {
      type     : 'each',
      limitTime: 15,
    },
  },
  quizData  : {
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
  },
  clientData: {
    isMobile: false,
  },
}

export const authStore = {
  user: {
    [AUTH_FACEBOOK]: {
      id          : 100001207968554,
      profileImage: 'https://graph.facebook.com/100001207968554/picture?type=large',
      name        : 'Saran Weerakun',
      firstName   : 'Saran',
    },
  },
}

export const runtimeStore = {
  currentPage: 1,
}

export const state         = {
  quiz   : quizStore,
  auth   : authStore,
  runtime: runtimeStore,
}
export const getMockupData = (override = {}, data = quizStore) => ({ ...data, ...override })
export const overrideStore = (newState, state = state) => {
  return {
    ...state,
    ...Object.keys(newState).reduce((all, key) => {
      all[key] = {
        ...state[key],
        ...newState[key],
      }
      return all
    }, {}),
  }
}
export default quizStore