import React from 'react'
import propTypes from './propTypes'

import DetailItem from '../DetailItem'

import { List } from './styles'

const DetailList = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <DetailItem key={index} item={item}/>
    ))}
  </List>
)

DetailList.propTypes = propTypes

export default DetailList
