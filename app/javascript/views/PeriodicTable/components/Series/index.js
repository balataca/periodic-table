import React from 'react'
import { categories, getColor } from '../../../../utils/categories'

import {
  Container,
  Item
} from './styles'

const Series = () => {
  return (
    <Container>
      {Object.values(categories).map((category, index) => (
        <Item key={index} color={getColor(category)}>{category}</Item>
      ))}
    </Container>
  )
}

export default Series;