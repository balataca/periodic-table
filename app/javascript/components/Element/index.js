import React from 'react'
import { getColor } from '../../utils/categories'

import {
  Item,
  AtomicNumber,
  Symbol,
  Name,
  AtomicMass,
} from './styles'

const Element = ({ element, primary, large }) => {
  const handleClick = () => {
    window.location.href = `/table/${element.name.toLowerCase()}`
  }

  return (
    <Item
      column={element.xpos}
      row={element.ypos}
      backgroundColor={getColor(element.category)}
      primary={primary}
      large={large}
      onClick={primary && handleClick}
    >
      <AtomicNumber>{element.number}</AtomicNumber>
      <Symbol>{element.symbol}</Symbol>
      <Name>{element.name}</Name>
      <AtomicMass>{element.atomic_mass}</AtomicMass>
    </Item>
  )
}

export default Element;