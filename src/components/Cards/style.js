import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  max-width: 500px;
  margin-bottom: 40px;
`

export const ImgBox = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  max-height: 250px;
  background-color: #2f2f2f;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex: 2;
  margin-right: 25px;
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
  cursor: pointer;
  > a {
    text-decoration: none;
    color: black;
  }
`

export const SeeMore = styled.button`
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 18px;
  background-color: #d07017;
  border: 0px;
  border-radius: 5px;
  cursor: pointer;
  color: white;

  > a {
    text-decoration: none;
    color: white;
  }
`

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
  max-width: 500px;
  margin-bottom: 40px;
  background-color: white;
`

export const Close = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 0px;
  width: 20px;
  height: 20px;
  color: red;
  position: relative;
  top: -125px;
  right: -30px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
`
