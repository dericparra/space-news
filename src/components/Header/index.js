import React from 'react'
import { Container, Title, Search, Sort, OptionBox } from './style'

const Header = () => {
  return (
    <Container>
      <Title>SpaceNews&#127776;</Title>
      <OptionBox>
        <Search type="search" placeholder="Procurar"></Search>
        <Sort placeholder="Organizar">
          <option value="" disable selected>
            Exibir
          </option>
          <option value="Mais Antigo">Mais Antigo</option>
          <option value="Mais Novo">Mais Novo</option>
        </Sort>
      </OptionBox>
    </Container>
  )
}

export default Header
