import React from 'react'

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

export default Elements