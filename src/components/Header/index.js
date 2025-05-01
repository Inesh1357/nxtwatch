import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {
  Bg,
  Img,
  ThemeImg,
  Button,
  ButtonLogout,
  ThemePro,
  Kk,
  PopUPPara,
  CancelButton,
  ConfirmButton,
  PopUpDiv,
  Div,
} from './styledComponents'
import ThemeContext from '../../ThemeContext'

class Header extends Component {
  onLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, themeChange} = value
          const imgLog = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const themeImg = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
          const onThemeChange = () => {
            themeChange()
          }
          return (
            <>
              <Bg isDarkTheme={isDarkTheme}>
                <Link to="/">
                  <Img src={imgLog} alt="website logo" className="header-img" />
                </Link>
                <Kk>
                  <div>
                    <Button type="button" onClick={onThemeChange}>
                      <ThemeImg src={themeImg} alt="theme" />
                    </Button>
                  </div>
                  <ThemePro
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt=" profile"
                  />
                  <div>
                    <Popup
                      modal
                      trigger={
                        <ButtonLogout
                          isDarkTheme={isDarkTheme}
                          type="button"
                          data-testid="theme"
                        >
                          Logout
                        </ButtonLogout>
                      }
                    >
                      {close => (
                        <PopUpDiv>
                          <div>
                            <PopUPPara>
                              Are you sure, you want to logout?
                            </PopUPPara>
                          </div>
                          <Div>
                            <CancelButton type="button" onClick={() => close()}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton
                              type="button"
                              onClick={this.onLogout}
                            >
                              Confirm
                            </ConfirmButton>
                          </Div>
                        </PopUpDiv>
                      )}
                    </Popup>
                  </div>
                </Kk>
              </Bg>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
