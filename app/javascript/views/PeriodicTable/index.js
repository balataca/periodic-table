import React, { useState } from 'react'
import Elements from './components/Elements'
import Series from './components/Series'
import ElementPlaceholder from './components/ElementPlaceholder'
import { Table } from './styles'

const PeriodicTable = ({ elements }) => {
  return (
    <Table columns={18}>
      <Elements elements={elements}/>
  
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
