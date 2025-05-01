import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict, formatDistanceToNow} from 'date-fns'
import {BiDislike, BiLike} from 'react-icons/bi'
import {v4 as uuidv4} from 'uuid'

import {CgPlayListAdd} from 'react-icons/cg'
import Loader from 'react-loader-spinner'
import SliderBar from '../SliderBar'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import CommentItem from '../CommentItem'
import {
  ButtonComment,
  InputComment,
  TextAreaComment,
  FromCoomment,
  LogoPara1,
  DivEmptyKK,
  Kk,
  Bg,
  SaveButton,
  Div,
  VideoDiv,
  VideoPara,
  VideoButton,
  Hr,
  LogoImg,
  LogoPara,
  CommentCount,
  CommentCountBg,
  CommentPara,
  Ul,
} from './styledComponents'

const apiStatusConstant = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const dataComment = JSON.parse(localStorage.getItem('comment_list'))
class VideoDetails extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstant.initail,
    isLike: false,
    isDisLike: false,
    isSave: false,
    comment: '',
    username: '',
    commentList: dataComment === null ? [] : dataComment,
  }

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updataVideoData = {
        channel: data.video_details.channel,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: updataVideoData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  changeLike = () => {
    this.setState(prevState => ({isLike: !prevState.isLike, isDisLike: false}))
  }

  changeDisLike = () => {
    this.setState(prevState => ({
      isDisLike: !prevState.isDisLike,
      isLike: false,
    }))
  }

  onChangeInput = event => {
    this.setState({username: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onCommentDelete = id => {
    const {commentList} = this.state
    const comment = commentList.filter(eachComment => id !== eachComment.id)
    localStorage.setItem('comment_list', comment)
    this.setState(
      {
        commentList: comment,
      },
      this.storageData,
    )
  }

  commentText = event => {
    event.preventDefault()
    const text = formatDistanceToNow(new Date())
    const {username, comment, videoDetails} = this.state
    const {id} = videoDetails
    const iTexh = Math.ceil(Math.random() * 7 - 1)
    if (username !== '' && comment !== '') {
      const newComment = {
        id: uuidv4(),
        videoId: id,
        username,
        comment,
        min: text,
        initialContainerBackgroundClassNames,
        iTexh,
      }

      this.setState(
        prevState => ({
          commentList: [...prevState.commentList, newComment],
          username: '',
          comment: '',
        }),
        this.storageData,
      )
    }
  }

  storageData = () => {
    const {commentList} = this.state
    console.log('mi')
    console.log(commentList)
    console.log('mi')
    localStorage.setItem('comment_list', JSON.stringify(commentList))
  }

  renderSuccessView = () => {
    const {
      videoDetails,
      isLike,
      isDisLike,
      username,
      comment,
      commentList,
    } = this.state
    console.log(commentList)
    let commentCountValue
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, addSaveVideo, isSaveVideo} = value
          const {
            id,
            channel,
            publishedAt,
            description,
            videoUrl,
            title,
            viewCount,
          } = videoDetails
          const upateChannel = {
            name: channel.name,
            profileImageUrl: channel.profile_image_url,
            subscriberCount: channel.subscriber_count,
          }
          const {name, profileImageUrl, subscriberCount} = upateChannel
          const formateDate = formatDistanceToNowStrict(new Date(publishedAt))
          const changeSave = () => {
            this.setState(prevState => ({
              isSave: !prevState.isSave,
            }))
            addSaveVideo({...videoDetails, name})
          }
          let colorSave
          let saveText
          const saveCheck = isSaveVideo.filter(eachItem => eachItem.id === id)

          const colorLike = isLike ? 'color' : 'color-1'
          const colorDisLike = isDisLike ? 'color' : 'color-1'
          if (saveCheck.length < 1) {
            colorSave = 'color-1'
            saveText = 'Save'
          } else {
            colorSave = 'color'
            saveText = 'Saved'
          }
          const currentCommentList = commentList.filter(
            eachItem => eachItem.videoId === id,
          )
          commentCountValue = currentCommentList.length
          return (
            <Bg isDarkTheme={isDarkTheme}>
              <ReactPlayer url={videoUrl} width="100%" height="400px" />
              <VideoPara isDarkTheme={isDarkTheme}>{title}</VideoPara>
              <VideoDiv>
                <Div>
                  <VideoPara isDarkTheme={isDarkTheme}>
                    {viewCount} views
                  </VideoPara>
                  <VideoPara isDarkTheme={isDarkTheme}>.</VideoPara>
                  <VideoPara isDarkTheme={isDarkTheme}>
                    {formateDate} ago
                  </VideoPara>
                </Div>
                <Div>
                  <VideoButton
                    type="button"
                    className={colorLike}
                    isDarkTheme={isDarkTheme}
                    onClick={this.changeLike}
                    isLike={isLike}
                  >
                    <BiLike className={colorLike} isLike={isLike} />
                    Like
                  </VideoButton>

                  <VideoButton
                    type="button"
                    className={colorDisLike}
                    isDarkTheme={isDarkTheme}
                    onClick={this.changeDisLike}
                    isDisLike={isDisLike}
                  >
                    <BiDislike className={colorDisLike} isDisLike={isDisLike} />
                    Dislike
                  </VideoButton>

                  <SaveButton
                    type="button"
                    className={colorSave}
                    isDarkTheme={isDarkTheme}
                    onClick={changeSave}
                  >
                    <CgPlayListAdd className={colorSave} />
                    {saveText}
                  </SaveButton>
                </Div>
              </VideoDiv>
              <Hr />
              <Div>
                <LogoImg src={profileImageUrl} alt="channel logo" />
                <div>
                  <LogoPara1 isDarkTheme={isDarkTheme}>{name}</LogoPara1>
                  <LogoPara isDarkTheme={isDarkTheme}>
                    {subscriberCount} subscribers
                  </LogoPara>
                </div>
              </Div>
              <LogoPara className="head" isDarkTheme={isDarkTheme}>
                {description}
              </LogoPara>
              <FromCoomment onSubmit={this.commentText}>
                <InputComment
                  type="text"
                  placeholder="Your Name"
                  onChange={this.onChangeInput}
                  value={username}
                />
                <TextAreaComment
                  rows="3"
                  cols="25"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={this.onChangeComment}
                />
                <div>
                  <ButtonComment type="submit">Add Comment</ButtonComment>
                </div>
              </FromCoomment>
              <hr />
              <CommentCountBg>
                <CommentCount>{commentCountValue}</CommentCount>
                <CommentPara>Comments</CommentPara>
              </CommentCountBg>
              <Ul>
                {commentList.map(eachItem => (
                  <CommentItem
                    comments={eachItem}
                    key={eachItem.id}
                    onCommentDelete={this.onCommentDelete}
                    videoCheck={eachItem.videoId === id}
                  />
                ))}
              </Ul>
            </Bg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => {}

  renderIsLoading = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <DivEmptyKK data-testid="loader" isDarkTheme={isDarkTheme}>
            <Loader type="ThreeDots" color="#4f46e5" height={80} width={80} />
          </DivEmptyKK>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      case apiStatusConstant.inProgress:
        return this.renderIsLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <Kk>
          <SliderBar />
          {this.renderStatus()}
        </Kk>
      </>
    )
  }
}

export default VideoDetails
