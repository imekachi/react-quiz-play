import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'
// Data
import { generateWrapper } from './MockupWrapper'
// Util
import { makeStoriesOf } from './util'
// UI Components
import Icon from '../components/Icon'
import { makeButtonWithStates } from '../components/ButtonWithStates'


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
        }
      }
    })
    return <Button/>
  })
  .add('ready(renderWithHtml)', () => {
    const Button = makeButtonWithStates({
      stateConfig: {
        ready: {
          title: 'ปุ่มแบบปกติ',
          html: (<span>ปุ่มแบบ <Icon className="fa-user"/> ปกติ</span>)
        }
      }
    })
    return <Button/>
  })
  .add('loading', () => {
    const Button = makeButtonWithStates()
    return <Button loading/>
  })