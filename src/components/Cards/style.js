import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin-bottom: 40px;
`

export const ImgBox = styled.div`
  flex: 2;
`
export const InfoBox = styled.div`
  flex: 3;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const ArticleInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5px 5px 0;
`

export const ArticleDescription = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.4;
  color: #555;
`

export const Day = styled.p`
  font-size: 14px;
`

export const SiteLink = styled.button`
  background-color: #fff;
  border: 2px solid #aaa;
  padding: 0 4px;
  border-radius: 5px;
`

export const SeeMore = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  background-color: #d07017;
  color: white;
  border: 0px;
  border-radius: 5px;
`
