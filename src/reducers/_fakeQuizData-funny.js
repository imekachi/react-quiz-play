export const fakeQuizInfo = {
  id          : 58518,
  quizType    : 'funnyquiz',
  quizCover   : 'https://image.dek-d.com/27/0417/8523/124713378',
  description : 'ทุกคนต้องเคยร้องแน่นอน',
  isNotFound  : false,
  isAccessible: true,
}

export const fakeQuizData = {
  questionData: {
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
  choiceData  : [
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