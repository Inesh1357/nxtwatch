import styled from 'styled-components'

export const Bg = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  height: 11vh;
  padding: 1px 40px 20px 40px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
export const Kk = styled.div`
  display: flex;
`
export const Img = styled.img`
  height: 35px;
  width: 130px;
  margin-bottom: 30px;
  margin-top: 5px;
  @media (max-width: 576px) {
    height: 20px;
    width: 80px;
  }
`

export const ThemeImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
  margin-top: 5px;
  @media (max-width: 576px) {
    height: 20px;
    width: 20px;
    margin-right: 3px;
    margin-top: 5px;
  }
`
export const ThemePro = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
  margin-top: 5px;
  @media (max-width: 576px) {
    height: 20px;
    width: 20px;
    margin-right: 8px;
    margin-top: 5px;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-top: 0px;
`
export const ButtonLogout = styled.button`
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  min-height: 20px;
  padding: 5px;
  width: 80px;
  border-radius: 7px;
  margin-top: 7px;
  border: 2px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
  @media (max-width: 576px) {
    height: 18px;
    width: 50px;
    padding: 2px;
    border: 2px solid ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
    margin-top: 2px;
    color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#3b82f6')};
    font-size: 8px;
  }
`
export const PopUpDiv = styled.div`
  background-color: #212121;
  min-height: 150px;
  min-width: 400px;
  padding: 20px 50px 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  @media (max-width: 576px) {
    min-height: 18px;
    min-width: 20px;
    padding: 10px 40px 20px 40px;
  }
`
export const Div = styled.div`
  display: flex;
`

export const CancelButton = styled.button`
  background-color: transparent;
  color: #f8fafc;
  border: 2px solid #f8fafc;
  min-height: 30px;
  min-width: 70px;
  padding: 10px;
  border-radius: 5px;
  @media (max-width: 576px) {
    min-height: 18px;
    min-width: 20px;
    font-size: 12px;
    padding: 5px;
  }
`
export const PopUPPara = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: #ffffff;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`

export const ConfirmButton = styled.button`
  min-width: 70px;
  min-height: 40px;
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
  padding: 10px;
  border-radius: 5px;
  margin-left: 20px;
  @media (max-width: 576px) {
    min-height: 18px;
    min-width: 20px;
    font-size: 12px;
    padding: 5px;
  }
`
