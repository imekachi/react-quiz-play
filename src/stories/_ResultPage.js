import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

// Data
import { getMockupData } from './mockupData'
import { generateWrapper } from './MockupWrapper'

// Util
import { makeStoriesOf } from './util'

// UI Components
import ResultPage from '../components/PageResult/index'
import ResultBox from '../components/PageResult/ResultBox'
import ShareBox from '../components/PageResult/ShareBox'

const resultData = {
  labelHeader    : '',
  image          : 'https://image.dek-d.com/27/0417/8523/124713378',
  header         : 'เยี่ยมไปเลย! คุณตอบถูก 7/7 ข้อ ( 5,465 คะแนน )',
  description    : 'ทุกคนต้องเคยร้องแน่นอน',
  descriptionLink: null,
}

const fbAllStatus = ['ready', 'loading', 'success', 'permissionDenied']

/**
 * RESULT BOX
 */
makeStoriesOf('Result Page/Result Box')
  .addDecorator((story) => (
      <div className="result-body ended-state">
        {story()}
      </div>
    ),
  )
  .addDecorator(generateWrapper({ appState: 'end' }))
  .add('no link', () => {
    const customProps = {
      quizType             : 'funnyquiz',
      isChallengeMode      : false,
      isMobile             : false,
      isDescriptionCentered: true,
      isResultShared       : false,
    }
    return (
      <ResultBox {...getMockupData(customProps, resultData)}/>
    )
  })
  .add('with link', () => {
    const customProps = {
      quizType             : 'funnyquiz',
      isChallengeMode      : false,
      isMobile             : false,
      isDescriptionCentered: true,
      isResultShared       : false,
      descriptionLink      : {
        url     : '#',
        textHtml: 'link อิอิ',
        textAttr: 'link อิอิ',
      },
    }
    return (
      <ResultBox {...getMockupData(customProps, resultData)}/>
    )
  })
  .add('long description', () => {
    const customProps = {
      quizType             : 'funnyquiz',
      isChallengeMode      : false,
      isMobile             : false,
      isDescriptionCentered: false,
      isResultShared       : false,
      description          : 'สารขัณฑ์ลอจิสติกส์เฝอ ลีเมอร์แคมเปญ มอคคาโบ้ยเจได ซีเนียร์บูติกดยุกคอมเมนต์ป๊อป ดั๊มพ์ แอดมิสชันพฤหัสโปรเจกเตอร์ นอมินีเจไดแฟรี ซากุระเมเปิลครัวซอง อุปัทวเหตุ บอมบ์อาข่า บิ๊กแครกเกอร์อาว์ เมจิคเดชานุภาพยังไงอาร์พีจีพุทโธ แอปพริคอท สเตชั่นฮิบร',
    }
    return (
      <ResultBox {...getMockupData(customProps, resultData)}/>
    )
  })
  .add('result shared', () => {
    const customProps = {
      quizType             : 'funnyquiz',
      isChallengeMode      : false,
      isMobile             : false,
      isDescriptionCentered: true,
      isResultShared       : true,
    }
    return (
      <ResultBox {...getMockupData(customProps, resultData)}/>
    )
  })

/**
 * SHARE BOX
 */
makeStoriesOf('Result Page/Share Box')
  .addDecorator((story) => (
      <div className="result-body ended-state">
        {story()}
      </div>
    ),
  )
  .addDecorator(generateWrapper({ appState: 'end' }))
  .addDecorator(withKnobs)
  .add('FB: ready', () => {
    const customProps = {
      isChallengeMode: false,
      isMobile       : false,
      fbStatus       : select('FB status:', fbAllStatus, 'ready'),
    }
    return (
      <ShareBox {...getMockupData(customProps, resultData)}/>
    )
  })
  .add('FB: loading', () => {
    const customProps = {
      isChallengeMode: false,
      isMobile       : false,
      fbStatus       : select('FB status:', fbAllStatus, 'loading'),
    }
    return (
      <ShareBox {...getMockupData(customProps, resultData)}/>
    )
  })
  .add('FB: success', () => {
    const customProps = {
      isChallengeMode: false,
      isMobile       : false,
      fbStatus       : select('FB status:', fbAllStatus, 'success'),
    }
    return (
      <ShareBox {...getMockupData(customProps, resultData)}/>
    )
  })
  .add('FB: permission denied', () => {
    const customProps = {
      isChallengeMode: false,
      isMobile       : false,
      fbStatus       : select('FB status:', fbAllStatus, 'permissionDenied'),
    }
    return (
      <ShareBox {...getMockupData(customProps, resultData)}/>
    )
  })
  .add('Line appear on mobile', () => {
    const customProps = {
      isChallengeMode: false,
      isMobile       : true,
    }
    return (
      <ShareBox {...getMockupData(customProps, resultData)}/>
    )
  })


/**
 * SUPERTEST CHALLENGE
 */
makeStoriesOf('Result Page/Supertest')
  .addDecorator(generateWrapper({ appState: 'end' }))
  .add('normal', () => {
    const customProps = {
      quizType             : 'supertest',
      isChallengeMode      : false,
      isMobile             : false,
      isDescriptionCentered: true,
      isResultShared       : false,
      fbStatus             : select('FB status:', fbAllStatus, 'ready'),
    }
    return (
      <ResultPage {...getMockupData(customProps, resultData)}/>
    )
  })
  .add('challenge', () => {
    const customProps = {
      ...resultData,
      quizType             : 'supertest',
      isChallengeMode      : true,
      isMobile             : false,
      isDescriptionCentered: true,
      isResultShared       : false,
      fbStatus             : select('FB status:', fbAllStatus, 'ready'),
    }
    return (
      <ResultPage {...getMockupData(customProps, resultData)}/>
    )
  })
