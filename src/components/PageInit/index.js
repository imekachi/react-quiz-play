import React from 'react'

import { DEFAULT_QUIZ_COVER, QUIZ_CENTER } from '../../constants/url'
import Description from '../Description'
import Icon from '../Icon'
import MessageBox from '../MessageBox'
import ActionBoxLogin from './ActionBoxLogin'
import ActionBoxPlay from './ActionBoxPlay'
import CoverImg from './CoverImg'
import TimerInfo from './TimerInfo'

const MessageBoxWrapper = ({ children }) => (
  <div className="message-box-wrapper">
    <MessageBox className="_padding-y-lg">
      <div className="messagetxt _txt-bold _txt-size-lg">
        {children}
      </div>
      <a className="dekdbutton _margin-top-sm" href={QUIZ_CENTER} target="_blank">
        <Icon className="fa-home"/> กลับไปที่หน้ารวมควิซ
      </a>
    </MessageBox>
  </div>
)

const PageInitComponent = (props) => {
  const {
          isNotFound,
          isAccessible,
          timerData,
          description,
          auth,
          playClickHandler,
          quizCover = DEFAULT_QUIZ_COVER,
        } = props

  if (isNotFound) {
    return (
      <div className="start-quiz-box">
        <MessageBoxWrapper>ไม่พบข้อมูลควิซหรือควิซนี้อาจถูกลบ</MessageBoxWrapper>
      </div>
    )
  } else if (!isAccessible) {
    return (
      <div className="start-quiz-box">
        <CoverImg src={quizCover}/>
        <MessageBoxWrapper>ควิซนี้ยังไม่เปิดใช้งาน</MessageBoxWrapper>
      </div>
    )
  }

  return (
    <div className="start-quiz-box">
      <CoverImg src={quizCover}/>

      {timerData
        ? <TimerInfo {...timerData}/>
        : <Description centered value={description}/>}

      {auth.isLogin
        ? <ActionBoxPlay loggedInType={auth.loggedInType} playClickHandler={playClickHandler}/>
        : <ActionBoxLogin isFBLoading={auth.isFBLoading}/>
      }
    </div>
  )
}

export default PageInitComponent