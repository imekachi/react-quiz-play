import React from 'react'

import { CHOICE_TYPES } from '../../../constants/quiz'
import ChoiceItem from '../../../containers/ChoiceItem'
import { getChoiceId } from '../../../containers/FormPlay'
import { makeArrayOf } from '../../../util/array'
import { isValueEmpty } from '../../../util/empty'
import ChoiceItemComponent from './ChoiceItem'
import TypeAnswerBox from './TypeAnswerBox'

const config = {
  grid: {
    choicePerRowDesktop: 3,
    choicePerRowMobile : 2,
  },
}

/**
 * Prepare data for rendering as how it is going to be rendered
 *
 * @param   {array} choiceListData
 * @param   {number} choicesPerRow
 * @param   {number} questionNumber
 * @return  {array}
 */
const getChoiceListUIData = (choiceListData, choicesPerRow, questionNumber) => {
  const totalRow = Math.ceil(choiceListData.length / choicesPerRow)

  // Generate each row as an Array of choices
  return makeArrayOf(totalRow).map((rowItem, rowIndex) => {
    const startChoiceItemIndex = rowIndex * choicesPerRow
    const choicesInThisRow     = choiceListData.slice(startChoiceItemIndex, startChoiceItemIndex + choicesPerRow)

    // Generate each choice
    return makeArrayOf(choicesPerRow).map((_, choiceIndex) => {
      const choiceItem = choicesInThisRow[choiceIndex]

      if (!isValueEmpty(choiceItem)) {
        choiceItem.choiceId = getChoiceId(questionNumber, choiceItem.value)
      }

      return choiceItem
    })
  })
}

const ChoiceBox = (props) => {
  let choiceBoxContent
  const { input } = props.fieldData

  if (props.choiceLayout === CHOICE_TYPES.TYPE_ANSWER) {
    const choiceId   = getChoiceId(props.questionNumber, 1)
    choiceBoxContent =
      <ChoiceItem component={TypeAnswerBox} choiceId={choiceId} input={input} questionNumber={props.questionNumber}/>
  }
  else {
    const gridChoicesPerRow = props.isMobile ? config.grid.choicePerRowMobile : config.grid.choicePerRowDesktop
    const choicesPerRow     = (props.choiceLayout === CHOICE_TYPES.LIST)
      ? props.choiceListData.length
      : gridChoicesPerRow
    const choiceListUIData  = getChoiceListUIData(props.choiceListData, choicesPerRow, props.questionNumber)

    choiceBoxContent = choiceListUIData.map((rowData, rowIndex) => {
        // Get choices for this row
        const choicesInThisRow = rowData.map((choiceItemData, choiceItemIndex) => {
          // If there is no data, so this is just the filler for grid layout
          if (isValueEmpty(choiceItemData)) {
            return <ChoiceItem renderAsFiller key={choiceItemIndex} component={ChoiceItemComponent}/>
          }

          return <ChoiceItem {...choiceItemData}
                             isMultipleChoice={true}
                             input={input}
                             questionNumber={props.questionNumber}
                             key={choiceItemData.choiceId}
                             component={ChoiceItemComponent}/>
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