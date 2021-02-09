import React from 'react'

import DetailItem from '../DetailItem'

import { List } from './styles'

const DetailList = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <DetailItem key={index} item={item}/>
    ))}
  </List>
)

export default DetailList
