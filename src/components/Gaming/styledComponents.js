import styled from 'styled-components'

export const Bg = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 89vh;
  width: 81vw;
  overflow: auto;
  padding: 5px;
`

export const Kk = styled.div`
  display: flex;
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
  display: flex;
  margin: 20px;
  flex-wrap: wrap;
`

export const Li = styled.li`
  margin: 5px;
`

export const Img = styled.img`
  height: 250px;
  width: 150px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#606060')};
  font-weight: 400;
`
export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#606060')};
  font-weight: 400;
  margin-top: 0px;
  margin-right: 10px;
`

export const HeadingEmpty = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
  font-weight: 700;
`

export const ParaEmpty = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: #64748b;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`
export const ButtonEmpty = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  height: 40px;
  min-width: 50px;
  padding: 13px 35px 15px 35px;
  border-radius: 5px;
  border-width: 0px;
`
export const ImgFailure = styled.img`
  height: 340px;
  width: 400px;
`

export const DivEmpty = styled.div`
  height: 89vh;
  width: 81vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
