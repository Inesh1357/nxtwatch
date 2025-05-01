import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {FaGamepad} from 'react-icons/fa'
import {CgPlayListAdd} from 'react-icons/cg'
import {Link, withRouter} from 'react-router-dom'
import {
  Bg2,
  Jsk,
  Ul,
  Icon,
  Para,
  Kk,
  Oo,
  SocialImg,
  ParaBt,
  Const,
} from './styledComponents'
import ThemeContext from '../../ThemeContext'

const SliderBar = props => {
  const {match} = props
  const {path} = match
  const isExact = path
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Bg2 isDarkTheme={isDarkTheme}>
            <Ul>
              <Link to="/" className="link">
                <Jsk tot="/" home={isExact}>
                  <Icon tot="/" home={isExact}>
                    <IoMdHome />
                  </Icon>
                  <Para tot="/" home={isExact}>
                    Home
                  </Para>
                </Jsk>
              </Link>
              <Link to="/trending" className="link">
                <Jsk tot="/trending" home={isExact}>
                  <Icon tot="/trending" home={isExact}>
                    <HiFire />
                  </Icon>
                  <Para tot="/trending" home={isExact}>
                    Trending
                  </Para>
                </Jsk>
              </Link>
              <Link to="/gaming" className="link">
                <Jsk tot="/gaming" home={isExact}>
                  <Icon tot="/gaming" home={isExact}>
                    <FaGamepad />
                  </Icon>
                  <Para tot="/gaming" home={isExact}>
                    Gaming
                  </Para>
                </Jsk>
              </Link>
              <Link to="/saved-videos" className="link">
                <Jsk tot="/saved-videos" home={isExact}>
                  <Icon tot="/saved-videos" home={isExact}>
                    <CgPlayListAdd />
                  </Icon>
                  <Para tot="/saved-videos" home={isExact}>
                    Saved videos
                  </Para>
                </Jsk>
              </Link>
            </Ul>
            <Oo>
              <Const isDarkTheme={isDarkTheme}>CONTACT US</Const>
              <Kk>
                <SocialImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </Kk>
              <ParaBt isDarkTheme={isDarkTheme}>
                Enjoy! Now to see your channels and recommendations!
              </ParaBt>
            </Oo>
          </Bg2>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(SliderBar)
