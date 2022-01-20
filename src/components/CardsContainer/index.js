import React, { useEffect, useState } from 'react'
import Card from '../Cards'
import axios from 'axios'

import { Container, LoadMore, Loading } from './style'

const CardsContainer = () => {
  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get('https://api.spaceflightnewsapi.net/v3/articles')
      .then((response) => setNewsList(response.data))
      .then(() => setIsLoading(false))
  }, [])
  return (
    <>
      {isLoading ? (
        <Loading>Carregando...</Loading>
      ) : (
        <>
          <Container>
            {newsList
              .filter((item, idx) => idx < 10)
              .map((item) => (
                <Card
                  key={item.title}
                  image={item.imageUrl}
                  description={item.summary}
                  title={item.title}
                  url={item.url}
                  source={item.newsSite}
                  date={item.publishedAt}
                />
              ))}
            <LoadMore>Carregar mais</LoadMore>
          </Container>
        </>
      )}
    </>
  )
}

export default CardsContainer
