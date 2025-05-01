import {Link} from 'react-router-dom'
import {formatDistanceToNowStrict} from 'date-fns'
import ThemeContext from '../../ThemeContext'
import {Img, Li, LogoImg, Para, Kk} from './styledComponents'

const VideoItem = props => {
  const {videoItem} = props
  const {channel, publishedAt, thumbnailUrl, title, viewCount, id} = videoItem
  const updateChannel = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  }
  const {name, profileImageUrl} = updateChannel
  const formateDate = formatDistanceToNowStrict(new Date(publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Li>
            <Link to={`/videos/${id}`} className="ll">
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <Kk>
                <LogoImg src={profileImageUrl} alt="channel logo" />
                <div>
                  <Para isDarkTheme={isDarkTheme}>{title}</Para>
                  <Para isDarkTheme={isDarkTheme}>{name}</Para>
                  <Kk>
                    <Para isDarkTheme={isDarkTheme}>{viewCount} views</Para>
                    <Para isDarkTheme={isDarkTheme}>.</Para>
                    <Para isDarkTheme={isDarkTheme}>{formateDate} ago</Para>
                  </Kk>
                </div>
              </Kk>
            </Link>
          </Li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
