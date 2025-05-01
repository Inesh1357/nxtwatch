import styled from 'styled-components'

export const Bg = styled.li`
  background-color: ${props => (props.isDarkTheme ? '#475569' : '#ffffff')};
  min-height: 100px;
  width: 100%;
  padding: 10px;
  margin-left: -30px;
  margin-bottom: 15px;
`

export const LiCart = styled.div`
  display: flex;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#606060')};
  font-size: 20px;
  font-weight: 800;
  margin-right: 15px;
  magin-top: 25px;
`

export const Para = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#606060')};
  font-size: 15px;
  font-weight: 500;
  margin-left: 15px;
  padding-top: 7px;
  magin-top: 10px;
`

export const CommentText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#606060')};
  font-size: 17px;
  font-weight: 500;
  margin-left: 55px;
  margin-top: -18px;
`

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const DeleteImg = styled.img`
  height: 30px;
  width: 30px;
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#606060')};
`

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
`

export const Hr = styled.hr`
  margin: 0px 0px 0px 0px;
  color: #334155;
`
