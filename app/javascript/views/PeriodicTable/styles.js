import styled from 'styled-components'

export const Table = styled.ol`
  min-width: 1300px;
  max-width: 1400px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, minmax(0, 1fr));
  justify-content: space-between;
  list-style: none;
`

export const Group = styled.div`
  text-align: center;
`
