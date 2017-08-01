import React from 'react'

// UI
import ChoiceItem from './ChoiceItem'
import { strPadding } from '../../../util/format'

const questionChoiceData = {
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
      value    : 3,
      isCorrect: false,
      titleHtml: 'เต้าเจี้ยว',
      titleAttr: 'เต้าเจี้ยว',
    },
    {
      value    : 4,
      isCorrect: false,
      titleHtml: 'ไข่ตุ่น',
      titleAttr: 'ไข่ตุ่น',
    },
    {
      value    : 5,
      isCorrect: false,
      titleHtml: 'ไข่ตุ่น',
      titleAttr: 'ไข่ตุ่น',
    },
  ],
}
const isMobile           = false
const config             = {
  grid: {
    choicePerRowDesktop: 3,
    choicePerRowMobile : 2,
  },
}

const ChoiceRow = (props) => (
  <div className="choice-row">
    {props.children}
  </div>
)

export default class ChoiceBox extends React.Component {

  constructor() {
    super()
    this.getChoiceList = this.getChoiceList.bind(this)
    this.getLayoutList = this.getLayoutList.bind(this)
    this.getLayoutGrid = this.getLayoutGrid.bind(this)
  }

  getLayoutGrid() {
    const choicePerRow = isMobile ? config.grid.choicePerRowMobile : config.grid.choicePerRowDesktop
    const totalRow     = Math.ceil(this.props.choiceListData.length / choicePerRow)
    let layout         = []

    for (let currentRow = 1, startItemIndex = 0;
         currentRow <= totalRow;
         currentRow++, startItemIndex += choicePerRow) {

      layout.push(
        <ChoiceRow key={currentRow}>
          {this.getChoiceList((index) => {
            return index >= startItemIndex && index < startItemIndex + choicePerRow
          }, choicePerRow)}
        </ChoiceRow>,
      )
    }

    return layout
  }

  getLayoutList() {
    return (
      <ChoiceRow>
        {this.getChoiceList()}
      </ChoiceRow>
    )
  }

  getChoiceList(filterChoiceFn = () => true, expectedMember = 0) {

    // Generate choiceList
    let choiceList = this.props.choiceListData.reduce((result, choiceItem, index) => {

      // Filter out unwanted choice
      if (!filterChoiceFn(index, choiceItem))
        return result

      // Generate choice ID
      const choiceId = `${strPadding(this.props.questionIndex, 3, '0')}-${choiceItem.value}`

      result.push(
        <ChoiceItem key={choiceId} choiceId={choiceId} questionIndex={this.props.questionIndex} {...choiceItem}/>,
      )

      return result
    }, [])

    // Add filler if member of result is less than expectedMember
    if (choiceList.length < expectedMember) {
      let spaceLeft = expectedMember - choiceList.length
      let filler    = Array(spaceLeft).fill(
        <ChoiceItem isFiller={true}/>,
      )
      choiceList.push([...filler])
    }

    return choiceList
  }

  render() {
    this.props               = { ...this.props, ...questionChoiceData }
    this.props.questionIndex = 1

    return (
      <div className={`choice-box -${this.props.choiceLayout}`}>
        {this.props.choiceLayout === 'grid' ? this.getLayoutGrid() : this.getLayoutList()}
      </div>
    )
  }
}