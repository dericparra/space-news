import React, { useState } from 'react'
import {
  Container,
  ImgBox,
  InfoBox,
  Title,
  ArticleInfos,
  ArticleDescription,
  Day,
  SiteLink,
  SeeMore,
  Modal,
  Close,
  ModalContainer
} from './style'

const Card = ({ description, title, url, source, image, date }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalContainer>
            <ImgBox style={{ backgroundImage: `url(${image})` }}></ImgBox>
            <InfoBox>
              <Title>{title}</Title>
              <ArticleInfos>
                <Day>{date.slice(0, 10)}</Day>
              </ArticleInfos>
              <ArticleDescription>{description}</ArticleDescription>
              <SeeMore>
                <a href={url}>Ir para o site</a>
              </SeeMore>
            </InfoBox>
            <Close className="close" onClick={() => setIsOpen(false)}>
              X
            </Close>
          </ModalContainer>
        </Modal>
      )}
      <Container>
        <ImgBox style={{ backgroundImage: `url(${image})` }}></ImgBox>
        <InfoBox>
          <Title>{title}</Title>
          <ArticleInfos>
            <Day>{date.slice(0, 10)}</Day>
            <SiteLink>
              <a href="">{source}</a>
            </SiteLink>
          </ArticleInfos>
          <ArticleDescription>{description}</ArticleDescription>
          <SeeMore onClick={() => setIsOpen(true)}>Ver Mais</SeeMore>
        </InfoBox>
      </Container>
    </>
  )
}

export default Card
