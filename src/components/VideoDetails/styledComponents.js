import styled from 'styled-components'

export const Kk = styled.div`
  display: flex;
`
export const Bg = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  height: 89vh;
  width: 100%;
  overflow: auto;
  padding: 20px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 600;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#212121')};
  margin-top: 15px;
`

export const VideoDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const VideoPara = styled.p`
  font-family: 'Roboto';
  font-size: 17px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#212121')};
  font-weight: 500;
  margin-right: 10px;
  margin-top: 15px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`

export const Div = styled.div`
  display: flex;
`
export const VideoButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  margin-top: 15px;
  font-size: 17px;
  display: flex;
  color: ${props =>
    props.isLike || props.isDisLike || props.isSave ? '#2563eb' : '#64748b'};
  @media (max-width: 576px) {
    font-size: 12px;
  }
`
export const Hr = styled.hr`
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#212121')};
  width: 100%;
`
export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 15px;
  @media (max-width: 576px) {
    height: 35px;
    width: 35px;
  }
`

export const LogoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#606060')};
  font-weight: 700;
  margin-top: 0px;
`

export const LogoPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#606060')};
  font-weight: 400;
  margin-top: -8px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`
export const LogoPara1 = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#606060')};
  font-weight: 400;
  margin-top: 0px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`

export const DivEmpty = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 89vh;
`
export const SaveButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 10px;
  font-size: 17px;
  display: flex;
  margin-top: 15px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`
export const DivEmptyKK = styled.div`
  height: 89vh;
  width: 81vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const InputComment = styled.input`
  height: 35px;
  width: 380px;
  border-radius: 5px;
  padding: 5px;
  color: #475569;
  font-size: 15px;
  margin-bottom: 10px;
  border-color: #334155;
  border-width: 1px;
  @media (max-width: 576px) {
    width: 307px;
  }
`

export const TextAreaComment = styled.textarea`
  border-radius: 10px;
  padding: 5px;
  color: #475569;
  font-size: 15px;
  margin-bottom: 10px;
  border-color: #334155;
  margin-left: 0px;
`

export const FromCoomment = styled.form`
  display: flex;
  flex-direction: column;
`
export const ButtonComment = styled.button`
  background-color: #0284c7;
  color: #ffffff;
  font-size: 15px;
  border-radius: 5px;
  height: 40px;
  min-width: 120px;
  padding: 5px 10px 5px 10px;
  border-width: 0px;
  margin-top: 0px;
`
export const CommentCountBg = styled.div`
  display: flex;
`

export const CommentCount = styled.p`
  background-color: #0b69ff;
  padding: 5px;
  font-size: 15px;
  color: #ffffff;
  border-radius: 5px;
  border-width: 0px;
  width: 32px;
  text-align: center;
`
export const CommentPara = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
  margin-top: 22px;
`

export const Ul = styled.ul`
  list-style-type: none;
`
