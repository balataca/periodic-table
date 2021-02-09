import React, { useState } from 'react'
import Element from '../../components/Element'
import Series from './components/Series'
import ElementPlaceholder from './components/ElementPlaceholder'
import { Table } from './styles'

const PeriodicTable = ({ elements }) => {
  return (
    <Table columns={18}>
      {elements.order.map((name) => (
        <Element
          key={elements[name].number}
          element={elements[name]}
          clickable={true}
        />
      ))}
  
      <Series/>

      <ElementPlaceholder column="3" row="6" backgroundColor="#402c17">
        <span>Lanthanide Group</span>
        <span>57-71</span>
      </ElementPlaceholder>

      <ElementPlaceholder column="3" row="7" backgroundColor="#732e4c">
        <span>Actinid Group</span>
        <span>89-103</span>
      </ElementPlaceholder>
    </Table>
  )
}

export default PeriodicTable;
