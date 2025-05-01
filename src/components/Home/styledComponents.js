import styled from 'styled-components'

export const Kk = styled.div`
  display: flex;
`
export const ParaBt = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 500;
  margin-top: 30px;
  @media (max-width: 576px) {
    font-size: 12px;
  }
`

export const BannerBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 270px;
  width: 78vw;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media (max-width: 576px) {
    width: 75vw;
  }
`
export const Context = styled.div`
  width: 300px;
`

export const Img = styled.img`
  height: 35px;
  width: 130px;
  margin-bottom: -10px;
  @media (max-width: 576px) {
    height: 20px;
    width: 80px;
  }
`
export const BannerButton = styled.button`
  background-color: transparent;
  color: #1e293b;
  height: 35px;
  width: 120px;
  border-radius: 4px;
  padding: 0px 10px 0px 10px;
  margin-top: 5px;
  border: 2px solid #1e293b;
  @media (max-width: 576px) {
    height: 34px;
    width: 110px;
    font-size: 12px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: '#0f0f0f';
  font-size: 20px;
`
export const Bg = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 44vh;
  width: 79vw;
  padding: 20px;
  margin-bottom: 25px;
  @media (max-width: 576px) {
    width: 72vw;
  }
`
export const InputBg = styled.div`
  display: flex;
  width: 400px;
  height: 35px;
  border: 2px solid #cbd5e1;
  margin-bottom: 25px;
  @media (max-width: 576px) {
    width: 280px;
  }
`

export const Input = styled.input`
  font-size: 15px;
  border: none;
  width: 100%;
  outline: none;
  margin-top: px;
  margin-right: px;
`

export const SearchButton = styled.button`
  height: 31px;
  margin-top: 0px;
  border-top: none;
  border-bottom: none;
  border-right: none;
  border-left: 2px solid #cbd5e1;
  outline: none;
  width: 80px;
  color: '#0f0f0f';
  font-size: 20px;
  padding-top: 5px;
`
export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-left: -35px;
`
export const LargeBg = styled.div`
  height: 89vh;
  overflow-y: scroll;
`

export const DivEmpty = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
