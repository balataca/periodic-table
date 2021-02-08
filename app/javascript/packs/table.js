import React from 'react'
import ReactDOM from 'react-dom'
import PeriodicTable from '../views/PeriodicTable'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('table_data');
  const data = node.getAttribute('data-elements');
  const elements = JSON.parse(data);

  ReactDOM.render(
    <PeriodicTable elements={elements}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
