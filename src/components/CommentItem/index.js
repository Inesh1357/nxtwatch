import {
  Bg,
  LiCart,
  Heading,
  Para,
  CommentText,
  Div,
  DeleteImg,
  Button,
  Hr,
} from './styledComponents'
import './index.css'
import ThemeContext from '../../ThemeContext'

const CommentItem = props => {
  const {comments, onCommentDelete, videoCheck} = props
  console.log(videoCheck)
  const {
    id,
    username,
    comment,
    min,
    initialContainerBackgroundClassNames,
    iTexh,
  } = comments
  const value = initialContainerBackgroundClassNames[iTexh]
  const onDelete = () => {
    onCommentDelete(id)
  }

  return (
    <ThemeContext.Consumer>
      {valueIns => {
        const {isDarkTheme} = valueIns
        return (
          <>
            {videoCheck === true ? (
              <Bg isDarkTheme={isDarkTheme}>
                <LiCart>
                  <Heading className={value}>
                    {username[0].toUpperCase()}
                  </Heading>
                  <Heading isDarkTheme={isDarkTheme}>{username}</Heading>
                  <Para isDarkTheme={isDarkTheme}>{min}</Para>
                </LiCart>
                <CommentText isDarkTheme={isDarkTheme}>{comment}</CommentText>
                <Div>
                  <Button type="button" onClick={onDelete}>
                    <DeleteImg
                      isDarkTheme={isDarkTheme}
                      src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
                      alt="delete"
                    />
                  </Button>
                </Div>
                <Hr />
              </Bg>
            ) : null}
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default CommentItem
