import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {formatDistanceToNowStrict} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import SliderBar from '../SliderBar'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import {
  Bg,
  Kk,
  BgCard,
  Icon,
  IconBg,
  IconHead,
  Ul,
  Li,
  LiPara,
  Div,
  LiDiv,
  LiImg,
  DivEmpty,
  ImgFailure,
  HeadingEmpty,
  ParaEmpty,
  ButtonEmpty,
} from './styledComponents'

const apiStatusConstant = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingVideo: [], apiStatus: apiStatusConstant.initail}

  componentDidMount() {
    this.getTending()
  }

  getTending = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updateTrending = data.videos.map(eachItem => ({
        channel: eachItem.channel,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        trendingVideo: updateTrending,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  retry = () => {
    this.getTending()
  }

  renderSuccessView = () => {
    const {trendingVideo} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <Bg isDarkTheme={isDarkTheme}>
              <BgCard isDarkTheme={isDarkTheme}>
                <IconBg>
                  <Icon>
                    <HiFire />
                  </Icon>
                </IconBg>
                <IconHead>Trending</IconHead>
              </BgCard>
              <Ul>
                {trendingVideo.map(eachItem => {
                  const {
                    id,
                    thumbnailUrl,
                    title,
                    publishedAt,
                    viewCount,
                    channel,
                  } = eachItem
                  const updateChannel = {
                    profileImageUrl: channel.profile_image_url,
                    name: channel.name,
                  }
                  const {name} = updateChannel
                  const formateDate = formatDistanceToNowStrict(
                    new Date(publishedAt),
                  )
                  return (
                    <Li key={id}>
                      <Link to={`/videos/${id}`} className="link">
                        <LiImg src={thumbnailUrl} alt="video thumbnail" />
                        <LiDiv>
                          <LiPara isDarkTheme={isDarkTheme}>{title}</LiPara>
                          <LiPara isDarkTheme={isDarkTheme}>{name}</LiPara>
                          <Div>
                            <LiPara isDarkTheme={isDarkTheme}>
                              {viewCount} views
                            </LiPara>
                            <LiPara isDarkTheme={isDarkTheme}>.</LiPara>
                            <LiPara isDarkTheme={isDarkTheme}>
                              {formateDate} ago
                            </LiPara>
                          </Div>
                        </LiDiv>
                      </Link>
                    </Li>
                  )
                })}
              </Ul>
            </Bg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImg = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <DivEmpty isDarkTheme={isDarkTheme}>
            <ImgFailure src={failureImg} alt="failure view" />
            <HeadingEmpty isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </HeadingEmpty>
            <ParaEmpty>
              We are some trouble to complete your request. Please try again.
            </ParaEmpty>
            <ButtonEmpty type="button" onClick={this.retry}>
              Retry
            </ButtonEmpty>
          </DivEmpty>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderIsLoading = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <DivEmpty isDarkTheme={isDarkTheme} data-testid="loader">
            <Loader type="ThreeDots" color="#4f46e5" height={80} width={80} />
          </DivEmpty>
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

export default Trending
