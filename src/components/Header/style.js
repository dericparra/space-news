import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 800px;
  height: 60px;
  align-items: center;
  padding: 15px 0;
  justify-content: center;
  position: relative;
  background-color: #302e53;
  @media (min-width: 539px) {
    padding: 30px 0;
  }
`

export const Title = styled.h1`
  font-size: 24px;
  color: white;
  position: absolute;
  left: 10px;

  @media (min-width: 539px) {
    position: static;
  }
`

export const OptionBox = styled.div`
  justify-self: end;
  width: 130px;
  position: absolute;
  right: 10px;

  @media (min-width: 539px) {
    right: 25px;
  }
`
export const Search = styled.input`
  width: 60px;
  margin: 0 5px 0 0;
  border-radius: 5px;
`

export const Sort = styled.select`
  width: 65px;
  border-radius: 5px;
`
