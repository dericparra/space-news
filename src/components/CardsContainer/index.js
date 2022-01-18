import React from 'react'
import Card from '../Cards'

import { Container, LoadMore } from './style'

const CardsContainer = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <LoadMore>Carregar mais</LoadMore>
    </Container>
  )
}

export default CardsContainer
