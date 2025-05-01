import styled from 'styled-components'

export const Kk = styled.div`
  display: flex;
`
export const BgEmpty = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 89vh;
  width: 81vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ImgEmpty = styled.img`
  height: 300px;
  width: 400px;
  @media (max-width: 576px) {
    height: 200px;
    width: 300px;
  }
`
export const HeadingEmpty = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
  font-weight: 700;
  margin-top: 25px;
`

export const ParaEmpty = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: #64748b;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
  margin-top: 0px;
`

export const Bg = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 89vh;
  width: 81vw;
  overflow: auto;
  padding: 5px;
`
export const BgCard = styled.div`
  height: 80px;
  width: 100%;
  padding: 15px 20px 15px 20px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#d7dfe9')};
  display: flex;
`
export const IconBg = styled.div`
  height: 45px;
  width: 45px;
  background-color: #000000;
  margin-right: 10px;
  padding: 5px 13px 10px 13px;
  border-radius: 45px;
`
export const Icon = styled.p`
  font-size: 20px;
  margin-right: 25px;
  margin-top: 5px;
  color: #ff0000;
`
export const IconHead = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
  font-weight: 700;
  margin-top: 5px;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 20px;
`

export const Li = styled.li`
  display: flex;
  margin-bottom: 20px;
  @media (max-width: 576px) {
    margin-left: -50px;
  }
`

export const LiDiv = styled.div`
  margin-left: 15px;
`

export const LiHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#606060')};
  font-weight: 400;
  margin-top: 0px;
`
export const LiPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#606060')};
  font-weight: 400;
  margin-top: 0px;
  margin-right: 10px;
`

export const Div = styled.div`
  display: flex;
`

export const LiImg = styled.img`
  height: 170px;
  width: 350px;
  @media (max-width: 576px) {
    margin-bottom: 20px;
    height: 170px;
    width: 250px;
  }
`

/*
width:320px
height:170px
*/
