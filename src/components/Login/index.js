import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  Bg,
  BgCard,
  Img,
  Label,
  Input,
  Ins,
  LabelCheck,
  CheckBox,
  Button,
  Error,
} from './styledComponents'
import ThemeContext from '../../ThemeContext'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    errorStatus: false,
    error: '',
  }

  onChangeType = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailed(data.error_msg)
    }
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    history.replace('/')
  }

  loginFailed = error => {
    this.setState({errorStatus: true, error})
  }

  render() {
    const {showPassword, username, password, errorStatus, error} = this.state
    const type = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const imgLog = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <Bg isDarkTheme={isDarkTheme}>
              <BgCard isDarkTheme={isDarkTheme}>
                <Img
                  isDarkTheme={isDarkTheme}
                  src={imgLog}
                  alt="website logo"
                />
                <form onSubmit={this.onSubmit}>
                  <Ins>
                    <Label isDarkTheme={isDarkTheme} htmlFor="username">
                      USERNAME
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      isDarkTheme={isDarkTheme}
                      placeholder="Username"
                      value={username}
                      onChange={this.onChangeUsername}
                    />
                  </Ins>
                  <Ins>
                    <Label htmlFor="password" isDarkTheme={isDarkTheme}>
                      PASSWORD
                    </Label>
                    <Input
                      type={type}
                      id="password"
                      isDarkTheme={isDarkTheme}
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
                    />
                  </Ins>
                  <div>
                    <CheckBox
                      type="checkbox"
                      id="checkbox"
                      onChange={this.onChangeType}
                    />
                    <LabelCheck htmlFor="checkbox" isDarkTheme={isDarkTheme}>
                      Show Password
                    </LabelCheck>
                  </div>
                  <Button type="submit">Login</Button>
                  {errorStatus && <Error>{error}</Error>}
                </form>
              </BgCard>
            </Bg>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
