import React from 'react'
import { getColor } from '../../utils/categories'
import propTypes from './propTypes'

import {
  Item,
  AtomicNumber,
  Symbol,
  Name,
  AtomicMass,
} from './styles'

const Element = ({ element, clickable, large }) => {
  const handleClick = () => {
    window.location.href = `/table/${element.name.toLowerCase()}`
  }

  return (
    <Item
      column={element.xpos}
      row={element.ypos}
      backgroundColor={getColor(element.category)}
      clickable={clickable}
      large={large}
      onClick={clickable && handleClick}
    >
      <AtomicNumber>{element.number}</AtomicNumber>
      <Symbol>{element.symbol}</Symbol>
      <Name>{element.name}</Name>
      <AtomicMass>{element.atomic_mass}</AtomicMass>
    </Item>
  )
}

Element.propTypes = propTypes

export default Element;