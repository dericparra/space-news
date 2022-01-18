import React from 'react'
import {
  Container,
  ImgBox,
  InfoBox,
  Title,
  ArticleInfos,
  ArticleDescription,
  Day,
  SiteLink,
  SeeMore
} from './style'

const Card = () => {
  return (
    <Container>
      <ImgBox></ImgBox>
      <InfoBox>
        <Title>Voo espacial Sputink</Title>
        <ArticleInfos>
          <Day>dd/mm/aaaa</Day>
          <SiteLink>nasa</SiteLink>
        </ArticleInfos>
        <ArticleDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </ArticleDescription>
        <SeeMore>Ver Mais</SeeMore>
      </InfoBox>
    </Container>
  )
}

export default Card
