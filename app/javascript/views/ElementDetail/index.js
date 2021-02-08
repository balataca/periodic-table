import React from 'react'
import Element from '../../components/Element'
import Icon from '@mdi/react'
import { mdiCloseCircle } from '@mdi/js'

import {
  Container,
  Main,
  List,
  Item,
  Summary,
} from './styles'

const ElementDetail = ({ element }) => {
  const handleClick = () => {
    window.location.href = '/table'
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
        onClick={handleClick}
        style={{ position: 'absolute', top: '-7em', right: '0' }}
      />

      <Main>
        <Element element={element} large={true} />
        <Summary>{element.summary}</Summary>
      </Main>

      <List>
        <Item>
          Appearance:
          <span> {element.appearance}</span>
        </Item>
        <Item>
          Atomic Mass:
          <span> {element.atomic_mass}</span>
        </Item>
        <Item>
          Boil:
          <span> {element.boil}</span>
        </Item>
        <Item>
          Category:
          <span> {element.category}</span>
        </Item>
        <Item>
          Color:
          <span> {element.color}</span>
        </Item>
        <Item>
          Density:
          <span> {element.density}</span>
        </Item>
        <Item>
          Discovered by:
          <span> {element.discovered_by}</span>
        </Item>
        <Item>
          Melt:
          <span> {element.melt}</span>
        </Item>
        <Item>
          Molar Heat:
          <span> {element.molar_heat}</span>
        </Item>
        <Item>
          Named by:
          <span> {element.named_by}</span>
        </Item>
        <Item>
          Number:
          <span> {element.number}</span>
        </Item>
        <Item>
          Period:
          <span> {element.period}</span>
        </Item>
        <Item>
          Phase:
          <span> {element.phase}</span>
        </Item>
        <Item>
          Source:
          <span> <a href={element.source}>{ element.source}</a></span>
        </Item>
        <Item>
          Spectral Image:
          <span> <a href={element.spectral_img}>{element.spectral_img}</a></span>
        </Item>
        <Item>
          Symbol:
          <span> {element.symbol}</span>
        </Item>
        <Item>
          Shells:
          <span> {element.shells.join(' ⇾ ')}</span>
        </Item>
        <Item>
          Electron Configuration:
          <span> {element.electron_configuration}</span>
        </Item>
        <Item>
          Electron Configuration Semantic:
          <span> {element.electron_configuration_semantic}</span>
        </Item>
        <Item>
          Electron Affinity:
          <span> {element.electron_affinity}</span>
        </Item>
        <Item>
          Electron Negativity Pauling:
          <span> {element.electronegativity_pauling}</span>
        </Item>
        <Item>
          Ionizing Energies:
          <span> {element.ionization_energies.join(', ')}</span>
        </Item>
      </List>  
    </Container>
  )
}

export default ElementDetail