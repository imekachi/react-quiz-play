export const QUIZ_STATE = {
  LOADING: 'QUIZ_LOADING',
  LOGIN  : 'QUIZ_LOGIN',
  INIT   : 'QUIZ_INIT',
  PLAY   : 'QUIZ_PLAY',
  END    : 'QUIZ_END',
}

export const QUIZ_TYPE = {
  SUPERTEST: 'supertest',   //'QUIZ_TYPE_SUPERTEST',
  MAZE     : 'quizmaze',    //'QUIZ_TYPE_MAZE',
  FUNNY    : 'funnyquiz',   //'QUIZ_TYPE_FUNNY',
  SOCIAL   : 'socialquiz',  //'QUIZ_TYPE_SOCIAL',
}

export const CHOICE_TYPE = {
  GRID       : 'grid',
  LIST       : 'list',
  TYPE_ANSWER: 'typeanswer',
}

export const FORM_NAME = {
  QUIZ_PLAY: 'QUIZ_PLAY_FORM',
}