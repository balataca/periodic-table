import React from 'react'
import ReactDOM from 'react-dom'
import ElementDetail from '../views/ElementDetail'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('element_data');
  const data = node.getAttribute('data-elements');
  const element = JSON.parse(data);

  ReactDOM.render(
    <ElementDetail element={element}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
