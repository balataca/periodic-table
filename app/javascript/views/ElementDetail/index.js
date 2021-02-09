import React from 'react'
import Element from '../../components/Element'
import Icon from '@mdi/react'
import { mdiCloseCircle } from '@mdi/js'
import { element } from '../../components/Element/propTypes'

import DetailList from './components/DetailList'

import {
  Container,
  Main,
  Summary,
} from './styles'

const ElementDetail = ({ element }) => {
  const close = () => {
    window.location.href = '/table'
  }

  const detailItems = () => {
    const excludedKeys = ['summary', 'xpos', 'ypos']

    return Object.entries(element).filter(([key, value]) => (
      !excludedKeys.includes(key) && value
    ))
  }

  return (
    <Container className='container'>
      <Icon
        path={mdiCloseCircle}
        title="Close"
        size={2}
        horizontal
        vertical
        color="white"
        onClick={close}
        style={{
          position: 'absolute',
          top: '-7em',
          right: '0',
          cursor: 'pointer'
        }}
      />

      <Main>
        <Element element={element} large={true} />
        <Summary>{element.summary}</Summary>
      </Main>

      <DetailList items={detailItems()}/>  
    </Container>
  )
}

ElementDetail.propTypes = {
  element
}

export default ElementDetail