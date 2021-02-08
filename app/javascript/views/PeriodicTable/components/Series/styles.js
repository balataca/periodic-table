import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 30px);
  font-size: 0.8em;
  text-transform: capitalize;
  grid-column-start: 6;
  grid-column-end: 13;
  grid-row-start: 2;
  grid-row-end: 4;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
 
  &:before {
    display: block;
    content: '';
    width: 25px;
    height: 25px;
    margin-right: 0.5em;
    background-color: ${({ color }) => color};
    border: 1px solid #B0BEC5;
  }
`