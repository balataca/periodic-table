import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 3.5em;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const List = styled.ul`
  min-width: 30vw;
  max-height: 400px;
  overflow-y: scroll;
`

export const Item = styled.li`
  font-weight: bold;
  color: #757575;

  span {
    color: #fff;
    font-weight: normal;
    text-transform: capitalize;
  }
`

export const Summary = styled.p`
  padding: 20px;
`