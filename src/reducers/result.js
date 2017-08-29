// ----------------------------------------------- FAKE_DATA
import _fakeAsync from './_fakeAsync'
// ----------------------------------------------- FAKE_DATA

export const types = {
  FETCH_RESULT        : 'RESULT/FETCH',
  FETCH_RESULT_SUCCESS: 'RESULT/FETCH_SUCCESS',
  FETCH_RESULT_FAILURE: 'RESULT/FETCH_FAILURE',
  RETRY_FETCH         : 'RESULT/RETRY_FETCH',
}

export const initialState = {
  isLoading : false,
  data      : {},
  retryCount: 0,
  error     : null,
}

// REDUCERS
export default function result(state = initialState, action) {

  switch (action.type) {

    case types.FETCH_RESULT: {
      return { ...state, isLoading: true, error: null }
    }

    case types.FETCH_RESULT_SUCCESS: {
      return {
        ...state,
        isLoading : false,
        error     : null,
        data      : action.data,
        retryCount: 0,
      }
    }

    case types.FETCH_RESULT_FAILURE: {
      return { ...state, isLoading: false, data: {}, error: action.error }
    }

    case types.RETRY_FETCH: {
      return {
        ...state,
        retryCount: state.retryCount + 1,
      }
    }

    default: {
      return state
    }
  }
}

// SELECTORS

// ACTIONS
const fetchResult = (quizFormData) => {
  const fakeFetch = (data, testData) => {
    // console.log(`You submitted:\n\n${JSON.stringify(data, null, 2)}`)
    console.log('>> QuizFormData Submitting: ', data)

    // TODO: remove this, this is a reject test
    if (testData < 1) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('test error'))
        }, 3000)
      })
    }

    return _fakeAsync({
      data: {
        image      : 'https://image.dek-d.com/27/0417/8523/124713378',
        header     : 'เยี่ยมไปเลย! คุณตอบถูก 7/7 ข้อ ( 5,465 คะแนน )',
        description: 'ทุกคนต้องเคยร้องแน่นอน',
      },
    }, 3000)
  }
  return async (dispatch, getState) => {
    const state = getState()

    dispatch({ type: types.FETCH_RESULT })

    try {
      const response = await fakeFetch(quizFormData, state.result.retryCount)
      dispatch({
        type: types.FETCH_RESULT_SUCCESS,
        data: response.data,
      })

      return response
    }
    catch (error) {
      dispatch({
        type: types.FETCH_RESULT_FAILURE,
        error,
      })

      return {
        error,
      }
    }
  }
}

export const actions = {
  fetchResult,
}