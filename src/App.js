import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import ThemeContext from './ThemeContext'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideo from './components/SavedVideo'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

// Replace your code here
const dataSave = JSON.parse(localStorage.getItem('saved_video'))

class App extends Component {
  state = {isDarkTheme: false, isSaveVideo: dataSave === null ? [] : dataSave}

  themeChange = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addSaveVideo = videosSave => {
    const {isSaveVideo} = this.state
    const {id} = videosSave
    const saveVideoMatch = isSaveVideo.find(eachItem => eachItem.id === id)
    if (saveVideoMatch) {
      const filterData = isSaveVideo.filter(eachItem => eachItem.id !== id)
      this.setState({isSaveVideo: filterData})
    } else {
      this.setState(prevState => ({
        isSaveVideo: [...prevState.isSaveVideo, videosSave],
      }))
    }
  }

  storageData = () => {
    const {isSaveVideo} = this.state
    localStorage.setItem('saved_video', JSON.stringify(isSaveVideo))
  }

  render() {
    const {isDarkTheme, isSaveVideo} = this.state
    this.storageData()
    return (
      <ThemeContext.Provider
        value={{
          isSaveVideo,
          isDarkTheme,
          themeChange: this.themeChange,
          addSaveVideo: this.addSaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideo} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
