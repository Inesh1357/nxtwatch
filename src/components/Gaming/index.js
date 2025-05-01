import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {FaGamepad} from 'react-icons/fa'
import Cookies from 'js-cookie'
import SliderBar from '../SliderBar'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import {
  Kk,
  Bg,
  BgCard,
  IconBg,
  Icon,
  IconHead,
  Para,
  Img,
  Li,
  Ul,
  HeadingEmpty,
  ParaEmpty,
  ImgFailure,
  DivEmpty,
  ButtonEmpty,
} from './styledComponents'

const apiStatusConstant = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gameVideo: [], apiStatus: apiStatusConstant.initail}

  componentDidMount() {
    this.getGame()
  }

  getGame = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updateGamimg = data.videos.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        gameVideo: updateGamimg,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  retry = () => {
    this.getGame()
  }

  renderSuccessView = () => {
    const {gameVideo} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <Bg isDarkTheme={isDarkTheme}>
              <BgCard isDarkTheme={isDarkTheme}>
                <IconBg>
                  <Icon>
                    <FaGamepad />
                  </Icon>
                </IconBg>
                <IconHead>Gaming</IconHead>
              </BgCard>
              <Ul>
                {gameVideo.map(eachItem => {
                  const {id, thumbnailUrl, title, viewCount} = eachItem
                  return (
                    <Li key={id}>
                      <Link to={`/videos/${id}`} className="ll">
                        <Img src={thumbnailUrl} alt="video thumbnail" />
                        <Para isDarkTheme={isDarkTheme}>{title}</Para>
                        <Para isDarkTheme={isDarkTheme}>
                          {viewCount} Watching Worldwide
                        </Para>
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

export default Gaming
