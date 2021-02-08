import React from 'react'

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

export default ElementPlaceholder