import styled from 'styled-components'

export const Bg = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 89vh;
  width: 81vw;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Kk = styled.div`
  display: flex;
`
export const Img = styled.img`
  height: 340px;
  width: 300px;
  @media (max-width: 576px) {
    height: 200px;
    width: 250px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#231f20')};
  font-weight: 700;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#616e7c')};
  font-weight: 500;
  text-align: center;
`
