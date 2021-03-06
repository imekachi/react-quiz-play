import { number, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import QuizProgressComponent from '../components/PagePlay/QuizProgress'
import { generateWrapper, PlayPageWrapper } from './MockupWrapper'
import { makeStoriesOf } from './util'

/**
 * Quiz Progress
 */
makeStoriesOf('Quiz Progress')
  .addDecorator(generateWrapper(PlayPageWrapper))
  .addDecorator(generateWrapper())
  .addDecorator(withKnobs)
  .add('render(try changing the value)', () => {
    const props = {
      currentPage: number('Current Page', 1),
      allPage    : number('Total Page', 8),
    }
    return (
      <div style={{ margin: '40px auto 80px' }}>
        <QuizProgressComponent {...props}/>
      </div>
    )
  })