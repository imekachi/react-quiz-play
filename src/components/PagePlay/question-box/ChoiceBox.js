import React from 'react'

// UI
import ChoiceItem from './ChoiceItem'
import { strPadding } from '../../../util/format'
import { isValueEmpty } from '../../../util/empty'

const config = {
  grid: {
    choicePerRowDesktop: 3,
    choicePerRowMobile : 2,
  },
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
        choiceItem.choiceId = `${strPadding(questionNumber, 3, '0')}-${choiceItem.value}`

      return choiceItem
    })
  })
}

const ChoiceBox = (props) => {
  const gridChoicesPerRow = props.isMobile ? config.grid.choicePerRowMobile : config.grid.choicePerRowDesktop
  const choicesPerRow     = (props.choiceLayout === 'list') ? props.choiceListData.length : gridChoicesPerRow
  const choiceListUIData  = getChoiceListUIData(props.choiceListData, choicesPerRow, props.questionNumber)

  const listOfChoices = choiceListUIData.map((rowData, rowIndex) => {
      // Get choices for this row
      const choicesInThisRow = rowData.map((choiceItemData, choiceItemIndex) => {
        // If there is no data, so this is just the filler for grid layout
        if (isValueEmpty(choiceItemData))
          return <ChoiceItem renderAsFiller key={choiceItemIndex}/>

        return <ChoiceItem {...choiceItemData} questionNumber={props.questionNumber} key={choiceItemData.choiceId}/>
      })

      // Wrap choices with row
      return (
        <div className="choice-row" key={rowIndex}>
          {choicesInThisRow}
        </div>
      )
    },
  )

  return (
    <div className={`choice-box -${props.choiceLayout}`}>
      {listOfChoices}
    </div>
  )
}

export default ChoiceBox