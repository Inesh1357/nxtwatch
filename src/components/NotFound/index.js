import SliderBar from '../SliderBar'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'
import {Bg, Kk, Img, Heading, Para} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <Kk>
            <SliderBar />
            <Bg isDarkTheme={isDarkTheme}>
              <Img src={notFoundImg} alt="not found" />
              <Heading isDarkTheme={isDarkTheme}>Page Not Found</Heading>
              <Para isDarkTheme={isDarkTheme}>
                we are sorry, the page you requested could not be found.
              </Para>
            </Bg>
          </Kk>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
