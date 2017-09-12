export const QUIZ_STATES = {
  LOADING     : 'QUIZ_LOADING',
  LOGIN       : 'QUIZ_LOGIN',
  INIT        : 'QUIZ_INIT',
  PLAY        : 'QUIZ_PLAY',
  END         : 'QUIZ_END',
  FETCH_FAILED: 'QUIZ_FETCH_FAILED',
}

export const QUIZ_TYPES = {
  SUPERTEST: 'supertest',   //'QUIZ_TYPES_SUPERTEST',
  MAZE     : 'quizmaze',    //'QUIZ_TYPES_MAZE',
  FUNNY    : 'funnyquiz',   //'QUIZ_TYPES_FUNNY',
  SOCIAL   : 'socialquiz',  //'QUIZ_TYPES_SOCIAL',
}

export const CHOICE_TYPES = {
  GRID       : 'grid',
  LIST       : 'list',
  TYPE_ANSWER: 'typeanswer',
}

export const FORM_NAMES = {
  QUIZ_PLAY: 'QUIZ_PLAY_FORM',
}

export const DELAYS = {
  BEFORE_NEXT_PAGE: 150,
}