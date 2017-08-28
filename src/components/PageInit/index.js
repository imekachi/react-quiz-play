import React from 'react'

import { DEFAULT_QUIZ_COVER, QUIZ_CENTER } from '../../constants/url'

import CoverImg from './CoverImg'
import TimerInfo from './TimerInfo'
import Description from '../Description'
import MessageBox from '../MessageBox'
import Icon from '../Icon'
import ActionBoxPlay from './ActionBoxPlay'
import ActionBoxLogin from './ActionBoxLogin'


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

  if (props.isNotFound) {
    return (
      <div className="start-quiz-box">
        <MessageBoxWrapper>ไม่พบข้อมูลควิซหรือควิซนี้อาจถูกลบ</MessageBoxWrapper>
      </div>
    )
  }
  else if (!props.isAccessible) {
    return (
      <div className="start-quiz-box">
        <CoverImg src={props.quizCover || DEFAULT_QUIZ_COVER}/>
        <MessageBoxWrapper>ควิซนี้ยังไม่เปิดใช้งาน</MessageBoxWrapper>
      </div>
    )
  }

  return (
    <div className="start-quiz-box">
      <CoverImg src={props.quizCover || DEFAULT_QUIZ_COVER}/>

      {props.timerData ? (
        <TimerInfo {...props.timerData}/>
      ) : (
        <Description centered value={props.description}/>
      )}

      {props.auth.isLogin ? (
        <ActionBoxPlay loggedInType={props.auth.loggedInType} playClickHandler={props.playClickHandler}/>
      ) : (
        <ActionBoxLogin isFBLoading={props.auth.isFBLoading}/>
      )}
    </div>
  )
}

export default PageInitComponent