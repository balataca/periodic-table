import React from 'react'
import { elements } from '../../propTypes'

import Element from '../../../../components/Element'

const Elements = ({ elements }) => {
  return (
    <>
      {elements.order.map((name) => (
        <Element
          key={elements[name].number}
          element={elements[name]}
          clickable={true}
        />
      ))}
    </>
  )
}

Element.propTypes = {
  elements
}

export default Elements