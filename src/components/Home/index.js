import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {IoMdClose, IoIosSearch} from 'react-icons/io'

import Cookies from 'js-cookie'
import {
  Kk,
  ParaBt,
  Bg,
  BannerBg,
  Context,
  Img,
  BannerButton,
  Button,
  Input,
  InputBg,
  SearchButton,
  Ul,
  LargeBg,
  DivEmpty,
  HeadingEmpty,
  ParaEmpty,
  ImgEmpty,
  ButtonEmpty,
  ImgFailure,
} from './styledComponents'
import SliderBar from '../SliderBar'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import VideoItem from '../VideoItem'

const apiStatusConstant = {
  initail: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videoList: [],
    showBanner: true,
    searchInput: '',
    searchResult: '',
    apiStatus: apiStatusConstant.initail,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {searchResult} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchResult}`
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
      const updateVideoData = data.videos.map(eachItem => ({
        channel: eachItem.channel,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        videoList: updateVideoData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  onClickClose = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    this.setState({searchResult: searchInput}, this.getData)
  }

  retry = () => {
    this.setState({searchResult: '', searchInput: ''}, this.getData)
  }

  renderSuccessView = () => {
    const {videoList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              {videoList.length < 1 ? (
                <DivEmpty>
                  <ImgEmpty
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <HeadingEmpty isDarkTheme={isDarkTheme}>
                    No Search results found
                  </HeadingEmpty>
                  <ParaEmpty>
                    Try different key words or remove search filter
                  </ParaEmpty>
                  <ButtonEmpty onClick={this.retry} type="button">
                    Retry
                  </ButtonEmpty>
                </DivEmpty>
              ) : (
                <Ul>
                  {videoList.map(eachItem => (
                    <VideoItem videoItem={eachItem} key={eachItem.id} />
                  ))}
                </Ul>
              )}
            </>
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
          <DivEmpty>
            <ImgFailure src={failureImg} alt="failure view" />
            <HeadingEmpty isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </HeadingEmpty>
            <ParaEmpty>We are having some trouble</ParaEmpty>
            <ButtonEmpty type="button" onClick={this.retry}>
              Retry
            </ButtonEmpty>
          </DivEmpty>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderIsLoading = () => (
    <DivEmpty data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height={80} width={80} />
    </DivEmpty>
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
    const {showBanner, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Header />
              <Kk>
                <SliderBar />
                <LargeBg>
                  {showBanner ? (
                    <BannerBg data-testid="banner">
                      <Context>
                        <Img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <ParaBt>Buy Nxt Watch Premium plans with UPI</ParaBt>
                        <BannerButton>GET IT NOW</BannerButton>
                      </Context>
                      <div>
                        <Button
                          data-testid="close"
                          type="button"
                          onClick={this.onClickClose}
                        >
                          <IoMdClose />
                        </Button>
                      </div>
                    </BannerBg>
                  ) : null}
                  <Bg isDarkTheme={isDarkTheme} data-testid="home">
                    <InputBg>
                      <Input
                        type="search"
                        onChange={this.onChangeInput}
                        placeholder="Search"
                        value={searchInput}
                      />
                      <SearchButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickSearch}
                      >
                        <IoIosSearch />
                      </SearchButton>
                    </InputBg>
                    {this.renderStatus()}
                  </Bg>
                </LargeBg>
              </Kk>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
