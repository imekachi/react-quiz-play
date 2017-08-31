import React from 'react'
// Data
import { state } from './mockupData'
import { getCurrentQuestionStream } from '../reducers/runtime'
import { generateWrapper, PlayPageWrapper } from './MockupWrapper'
import { getFieldName } from '../containers/FormPlay'
// Util
import { makeStoriesOf } from './util'
import QuestionStreamComponent from '../components/PagePlay/QuestionStream'
// UI Components


/**
 * Choice Box
 */
makeStoriesOf('ChoiceBox')
  .addDecorator(generateWrapper(PlayPageWrapper))
  .addDecorator(generateWrapper())
  .add('layout: list', () => {
    const localState = {
      ...state,
    }
    const props      = {
      stream            : getCurrentQuestionStream(localState),
      isMobile          : localState.quiz.clientData.isMobile,
      hideQuestionNumber: false,
      getFieldName,
    }

    console.log('>> props.stream: ', props.stream)
    return (
      <QuestionStreamComponent {...props}/>
    )
  })