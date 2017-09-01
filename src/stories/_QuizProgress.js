import React from 'react'
import { number, withKnobs } from '@storybook/addon-knobs'

import { makeStoriesOf } from './util'
import { generateWrapper, PlayPageWrapper } from './MockupWrapper'
import QuizProgressComponent from '../components/PagePlay/QuizProgress'

/**
 * Quiz Progress
 */
makeStoriesOf('Quiz Progress')
  .addDecorator(generateWrapper(PlayPageWrapper))
  .addDecorator(generateWrapper())
  .addDecorator(withKnobs)
  .add('render(try changing the value)', () => {
    const props   = {
      currentPage: number('Current Page', 1),
      allPage    : number('Total Page', 8),
    }
    return (
      <div style={{margin: '40px auto 80px'}}>
        <QuizProgressComponent {...props}/>
      </div>
    )
  })