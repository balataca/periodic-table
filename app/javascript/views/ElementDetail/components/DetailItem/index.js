import React from 'react'
import { parseDetail } from './detailParser'
import { Item } from './styles'

const DetailItem = ({ item: [ title, detail ]}) => {
  return (
    <Item>
      {title.split('_').join(' ')}:
      <span> {parseDetail(detail)}</span>
    </Item>
  )
}

export default DetailItem
