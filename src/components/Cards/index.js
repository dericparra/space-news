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

const Card = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalContainer>
            <ImgBox></ImgBox>
            <InfoBox>
              <Title>Voo espacial Sputink</Title>
              <ArticleInfos>
                <Day>dd/mm/aaaa</Day>
                <SiteLink>
                  <a href="">nasa</a>
                </SiteLink>
              </ArticleInfos>
              <ArticleDescription>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </ArticleDescription>
              <SeeMore>
                <a href="">Ir para o site</a>
              </SeeMore>
            </InfoBox>
            <Close className="close" onClick={() => setIsOpen(false)}>
              X
            </Close>
          </ModalContainer>
        </Modal>
      )}
      <Container>
        <ImgBox></ImgBox>
        <InfoBox>
          <Title>Voo espacial Sputink</Title>
          <ArticleInfos>
            <Day>dd/mm/aaaa</Day>
            <SiteLink>
              <a href="">nasa</a>
            </SiteLink>
          </ArticleInfos>
          <ArticleDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </ArticleDescription>
          <SeeMore onClick={() => setIsOpen(true)}>Ver Mais</SeeMore>
        </InfoBox>
      </Container>
    </>
  )
}

export default Card
