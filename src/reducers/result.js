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
  isLoading     : false,
  data          : {},
  isResultShared: false,
  retryCount    : 0,
  error         : null,
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
        data      : action.payload,
        retryCount: 0,
      }
    }

    case types.FETCH_RESULT_FAILURE: {
      return { ...state, isLoading: false, data: {}, error: action.payload }
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
const fakeFetch   = (data) => {
  // console.log(`You submitted:\n\n${JSON.stringify(data, null, 2)}`)
  console.log('>> QuizFormData Submitting: ', data)
  return _fakeAsync({
    data: {
      image      : 'https://image.dek-d.com/27/0417/8523/124713378',
      header     : 'เยี่ยมไปเลย! คุณตอบถูก 7/7 ข้อ ( 5,465 คะแนน )',
      description: {
        isCentered: true,
        textHtml  : 'ทุกคนต้องเคยร้องแน่นอน',
      },
    },
  }, 2500)
}
const fetchResult = (quizFormData) => async (dispatch, getState) => {
  if (getState().result.error) {
    dispatch({ type: types.RETRY_FETCH })
  }
  // code below has to call getState() to get newly updated state
  // if you store state like; const state = getState()
  // you will get the same un-updated state and it may causing unexpected bug

  dispatch({ type: types.FETCH_RESULT })

  try {
    const response = await fakeFetch(quizFormData)
    // if (getState().result.retryCount < 1) throw new Error('RESULT_FAILED')
    dispatch({
      type   : types.FETCH_RESULT_SUCCESS,
      payload: response.data,
    })

    return response
  }
  catch (error) {
    dispatch({
      type   : types.FETCH_RESULT_FAILURE,
      payload: error,
    })

    return Promise.reject(error)
  }
}

export const actions = {
  fetchResult,
}