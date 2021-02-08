import styled from 'styled-components'

export const Placeholder = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 0.7em;
  text-align: center;
`