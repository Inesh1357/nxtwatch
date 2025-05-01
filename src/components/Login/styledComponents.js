import styled from 'styled-components'

export const Bg = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BgCard = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  min-height: 100px;
  padding: 30px;
  box-shadow: ${props => (props.isDarkTheme ? '' : '0px 4px 16px 0px #bfbfbf')};
  width: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`

export const Img = styled.img`
  height: 40px;
  width: 150px;
  margin-bottom: 30px;
  align-self: center;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#424242')};
  font-weight: 500;
  margin-bottom: 10px;
`

export const Input = styled.input`
  background-color: transparent;
  width: 350px;
  min-height: 30px;
  padding: 8px;
  color: ${props => (props.isDarkTheme ? ' #f9f9f9' : '#909090')};
  border-radius: 7px;
  border: ${props =>
    props.isDarkTheme ? '1px solid #f9f9f9' : '1px solid #475569'};
`

export const Ins = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
  margin-right: 10px;
`

export const LabelCheck = styled.label`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#181818')};
  font-weight: 500;
  margin-top: 0px;
`

export const Button = styled.button`
  width: 350px;
  min-height: 30px;
  padding: 8px;
  background-color: #3b82f6;
  font-size: 15px;
  text-align: center;
  border-radius: 8px;
  border-width: 0px;
  color: #ffffff;
  margin-top: 20px;
`
export const Error = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ff0b37;
  font-weight: 500;
`
