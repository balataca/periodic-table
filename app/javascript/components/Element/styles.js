import styled, { css } from 'styled-components'

export const Item = styled.li`
  padding: 5px;
  color: #fff;
  background-color: ${({ backgroundColor }) => backgroundColor};
  grid-row: ${({ row }) => row};
  grid-column: ${({ column }) => column};
  border: 2px solid #313435;
  list-style: none;
  
  ${({ clickable }) => clickable && css`
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      border: 2px solid #588ffe;
    }
  `}

  ${({ large }) => large && css`
    width: 250px;
    height: 250px;
    padding: 1em;
    font-size: 3em;
  `}
`

export const AtomicNumber = styled.span`
  display: block;
  font-size: 0.6em;
`

export const Symbol = styled.abbr`
  display: block;
  font-size: 1em;
  font-weight: bold;
`

export const Name = styled.em`
  display: block;
  font-size: 0.55em;
`

export const AtomicMass = styled.span`
  display: block;
  font-size: 0.5em;
`