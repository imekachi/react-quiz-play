import React from 'react'

// UI
import ChoiceItem from './ChoiceItem'
import { strPadding } from '../../../util/format'

const mockupData = {
  choiceLayout  : 'list',
  choiceListData: [
    {
      value    : 1,
      isCorrect: false,
      titleHtml: 'ฮอลล์',
      titleAttr: 'ฮอลล์',
      img      : 'https://www0.dek-d.com/assets/quiz/images/default-quiz-cover.png',
    },
    {
      value    : 2,
      isCorrect: true,
      titleHtml: 'โอเล่',
      titleAttr: 'โอเล่',
      img      : 'https://lh5.googleusercontent.com/-NhXcZFMcn_I/UsIFGTZI1KI/AAAAAAAAASY/TiwNPATcpVU/s500-no/TaeyeonDookongLarge.gif',
    },
    {
      value: 3,
      isCorrect: false,
      titleHtml: 'เต้าเจี้ยว',
      titleAttr: 'เต้าเจี้ยว',
    }
  ],
}

const getChoiceId = (questionIndex, choiceValue) => `${strPadding(questionIndex, 3, '0')}-${choiceValue}`

const ChoiceLayout = (props) => {
  return (
    <div className="choice-row">
      {props.children}
    </div>
  )
}

export default class ChoiceBox extends React.Component {
  render() {
    this.props = { ...this.props, ...mockupData }

    this.props.questionIndex  = 1
    this.props.choiceListData = mockupData.choiceListData

    const choiceItemList = this.props.choiceListData.map(row => {
      const choiceId = getChoiceId(this.props.questionIndex, row.value)

      return (
        <ChoiceItem key={choiceId} choiceId={choiceId} questionIndex={this.props.questionIndex} {...row}/>
      )
    })

    return (
      <div className={`choice-box -${this.props.choiceLayout}`}>
        <ChoiceLayout>
          {choiceItemList}
        </ChoiceLayout>
      </div>
    )
  }
}