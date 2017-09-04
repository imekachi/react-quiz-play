import React from 'react'

import QuestionStreamComponent from '../components/PagePlay/QuestionStream'
import { getFieldName } from '../containers/FormPlay'
import { getCurrentQuestionStream } from '../reducers/runtime'
import { state } from './mockupData'
import { generateWrapper, PlayPageWrapper } from './MockupWrapper'
import { makeStoriesOf } from './util'

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