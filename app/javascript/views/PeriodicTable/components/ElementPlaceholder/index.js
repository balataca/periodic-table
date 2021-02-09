import React from 'react'
import propTypes from './propTypes'

import { Placeholder } from './styles'

const ElementPlaceholder = ({ children, column, row, backgroundColor }) => {
  return (
    <Placeholder
      column={column}
      row={row}
      backgroundColor={backgroundColor}
    >{children}</Placeholder>
  )
}

ElementPlaceholder.propTypes = propTypes

export default ElementPlaceholder