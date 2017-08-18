import React from 'react'

// UI
import ChoiceItem from './ChoiceItem'
import { strPadding } from '../../../util/format'
import { isValueEmpty } from '../../../util/empty'

const isMobile = false
const config   = {
  grid: {
    choicePerRowDesktop: 3,
    choicePerRowMobile : 2,
  },
}

const getChoiceListData = (choiceListData, choicesPerRow, questionNumber) => {
  const totalRow = Math.ceil(choiceListData.length / choicesPerRow)
  // Each Row
  return Array.apply(null, new Array(totalRow)).map((rowItem, rowIndex) => {
    const startChoiceItemIndex = rowIndex * choicesPerRow

    const choicesInRow = choiceListData.slice(startChoiceItemIndex, startChoiceItemIndex + choicesPerRow)
    // Each Choice
    return Array.apply(null, new Array(choicesPerRow)).map((_, choiceIndex) => {
      const choiceItem = choicesInRow[choiceIndex]

      if (!isValueEmpty(choiceItem))
        choiceItem.choiceId = `${strPadding(questionNumber, 3, '0')}-${choiceItem.value}`

      return choiceItem
    })
  })
}

const ChoiceBox = (props) => {
  const gridChoicesPerRow = isMobile ? config.grid.choicePerRowMobile : config.grid.choicePerRowDesktop
  const choicesPerRow     = (props.choiceLayout === 'list') ? props.choiceListData.length : gridChoicesPerRow

  const choiceListData = getChoiceListData(props.choiceListData, choicesPerRow, props.questionNumber)

  const listOfChoices = choiceListData.map((rowData, rowIndex) => {
      // Get Choices for this row
      const choicesInThisRow = rowData.map((choiceItemData, choiceItemIndex) => {
        if (isValueEmpty(choiceItemData))
          return <ChoiceItem key={choiceItemIndex} isFiller={true}/>

        return <ChoiceItem key={choiceItemData.choiceId} {...choiceItemData}/>
      })

      // Wrap with row
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