import React from 'react'
import { strPadding } from '../../../util/format'
import { isValueEmpty } from '../../../util/empty'
import { getNumber } from '../../../util/number'
import { CHOICE_TYPE } from '../../../constants/quizConst'

// UI
import ChoiceItem from '../../../containers/ChoiceItem'
import TypeAnswerBox from './TypeAnswerBox'

const config = {
  grid: {
    choicePerRowDesktop: 3,
    choicePerRowMobile : 2,
  },
}

export const getInputName    = (questionNumber) => `answer[${questionNumber}]`
export const getChoiceId     = (questionNumber, choiceValue) => `${strPadding(questionNumber, 3, '0')}-${choiceValue}`
export const extractChoiceId = (choiceId) => {
  const fragments = choiceId.split('-')
  return {
    questionNumber: getNumber(fragments[0]),
    value         : getNumber(fragments[1]),
  }
}

/**
 * Prepare data for rendering as how it is going to be rendered
 * @param   {Array} choiceListData
 * @param   {Number} choicesPerRow
 * @param   {Number} questionNumber
 *
 * @return  {Array}
 */
const getChoiceListUIData = (choiceListData, choicesPerRow, questionNumber) => {
  const totalRow = Math.ceil(choiceListData.length / choicesPerRow)

  // Generate each row as an Array of choices
  return Array.apply(null, new Array(totalRow)).map((rowItem, rowIndex) => {
    const startChoiceItemIndex = rowIndex * choicesPerRow
    const choicesInThisRow     = choiceListData.slice(startChoiceItemIndex, startChoiceItemIndex + choicesPerRow)

    // Generate each choice
    return Array.apply(null, new Array(choicesPerRow)).map((_, choiceIndex) => {
      const choiceItem = choicesInThisRow[choiceIndex]

      if (!isValueEmpty(choiceItem))
        choiceItem.choiceId = getChoiceId(questionNumber, choiceItem.value)

      return choiceItem
    })
  })
}

const ChoiceBox = (props) => {
  let choiceBoxContent
  const inputName = getInputName(props.questionNumber)

  if (props.choiceLayout === CHOICE_TYPE.TYPE_ANSWER) {
    const choiceId = getChoiceId(props.questionNumber, 1)

    choiceBoxContent = <TypeAnswerBox inputName={inputName} choiceId={choiceId}/>
  }
  else {
    const gridChoicesPerRow = props.isMobile ? config.grid.choicePerRowMobile : config.grid.choicePerRowDesktop
    const choicesPerRow     = (props.choiceLayout === CHOICE_TYPE.LIST) ? props.choiceListData.length : gridChoicesPerRow
    const choiceListUIData  = getChoiceListUIData(props.choiceListData, choicesPerRow, props.questionNumber)

    choiceBoxContent = choiceListUIData.map((rowData, rowIndex) => {
        // Get choices for this row
        const choicesInThisRow = rowData.map((choiceItemData, choiceItemIndex) => {
          // If there is no data, so this is just the filler for grid layout
          if (isValueEmpty(choiceItemData))
            return <ChoiceItem renderAsFiller key={choiceItemIndex}/>

          return <ChoiceItem {...choiceItemData} inputName={inputName} questionNumber={props.questionNumber}
                             key={choiceItemData.choiceId}/>
        })

        // Wrap choices with row
        return (
          <div className="choice-row" key={rowIndex}>
            {choicesInThisRow}
          </div>
        )
      },
    )

  }


  return (
    <div className={`choice-box -${props.choiceLayout}`}>
      {choiceBoxContent}
    </div>
  )
}

export default ChoiceBox