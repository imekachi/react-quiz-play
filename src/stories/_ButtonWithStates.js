import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import { makeButtonWithStates } from '../components/ButtonWithStates'
import Icon from '../components/Icon'
import { generateWrapper } from './MockupWrapper'
import { makeStoriesOf } from './util'

/**
 * Button With States
 */
makeStoriesOf('ButtonWithStates')
  .addDecorator((story) => (
      <div className="_margin-bottom-lg">
        {story()}
      </div>
    ),
  )
  .addDecorator(generateWrapper())
  .addDecorator(withKnobs)
  .add('ready(renderWithConfig)', () => {
    const Button = makeButtonWithStates({
      stateConfig: {
        ready: {
          icon: 'fa-arrow-left',
          text: 'ปุ่มแบบปกติ',
        },
      },
    })
    return <Button/>
  })
  .add('ready(renderWithHtml)', () => {
    const Button = makeButtonWithStates({
      stateConfig: {
        ready: {
          title: 'ปุ่มแบบปกติ',
          html : (<span>ปุ่มแบบ <Icon className="fa-user"/> ปกติ</span>),
        },
      },
    })
    return <Button/>
  })
  .add('loading', () => {
    const Button = makeButtonWithStates()
    return <Button loading/>
  })