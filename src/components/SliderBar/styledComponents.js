import styled from 'styled-components'

export const Bg2 = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  height: 89vh;
  width: 19%;
  display: flex;
  padding-top: 25px;
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 576px) {
    width: 26%;
  }
`
export const Jsk = styled.li`
  display: flex;
  margin-top: -20px;
  height: 35px;
  margin-left: -17px;
  margin-bottom: 25px;
  padding-left: 7px;
  width: 250px;
  background-color: ${props => (props.home === props.tot ? '#cbd5e1' : '')};
`

export const Para = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.home === props.tot ? '#000000' : '#64748b')};
  margin-top: 5px;
  @media (max-width: 576px) {
    font-size: 12px;
    margin-left: -20px;
    margin-top: 10px;
  }
`

export const Icon = styled.p`
  font-size: 20px;
  margin-right: 25px;
  margin-top: 5px;
  color: ${props => (props.home === props.tot ? '#ff0000' : ' #0f0f0f')};
`

export const Ul = styled.ul`
  list-style-type: none;
`
export const Kk = styled.div`
  display: flex;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 600;
  margin-bottom: 30px;
`

export const Oo = styled.div`
  margin-left: 20px;
`

export const SocialImg = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
  @media (max-width: 576px) {
    height: 15px;
    width: 15px;
  }
`

export const ParaBt = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 500;
  margin-top: 30px;
  @media (max-width: 576px) {
    font-size: 10px;
  }
`
export const Const = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: 600;
  margin-bottom: 30px @media (max-width: 576px) {
    font-size: 15px;
  }
`
