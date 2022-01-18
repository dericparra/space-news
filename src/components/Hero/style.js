import styled from 'styled-components'
import heroImage from '../../assets/heroImg.jpg'

export const Container = styled.div`
  display: flex;
  max-width: 800px;
  height: 200px;
  align-items: center;
  justify-content: center;
  background-image: url(${heroImage});
  background-position: center;
  background-size: cover;
`

export const HeroImg = styled.div``
