import React from 'react'
import { parseDetail } from './detailParser'
import { Item } from './styles'
import propTypes from './propTypes'

const DetailItem = ({ item: [ title, detail ]}) => {
  return (
    <Item>
      {title.split('_').join(' ')}:
      <span> {parseDetail(detail)}</span>
    </Item>
  )
}

DetailItem.propTypes = propTypes

export default DetailItem
