import styled from 'styled-components'

export const Li = styled.li`
  margin-right: 15px;
  margin-bottom: 30px;
  width: 320px;
  margin-bottom: 25px;
  @media (max-width: 576px) {
    width: 280px;
  }
`

export const Img = styled.img`
  height: 170px;
  width: 310px;
  margin-bottom: 10px;
  margin-bottom: 25px;
  @media (max-width: 576px) {
    width: 270px;
  }
`
export const Kk = styled.div`
  display: flex;
`

export const LogoImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  @media (max-width: 576px) {
    height: 35px;
    width: 35px;
    margin-right: 10px;
  }
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#606060')};
  font-weight: 400;
  margin-top: 0px;
  margin-right: 5px;
  margin-bottom: 25px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`
