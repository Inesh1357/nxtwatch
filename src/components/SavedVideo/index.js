import {HiFire} from 'react-icons/hi'
import {formatDistanceToNowStrict} from 'date-fns'
import {Link} from 'react-router-dom'
import SliderBar from '../SliderBar'
import ThemeContext from '../../ThemeContext'
import Header from '../Header'

import {
  Bg,
  Kk,
  BgEmpty,
  ImgEmpty,
  HeadingEmpty,
  ParaEmpty,
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
} from './styledComponents'

const SavedVideo = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, isSaveVideo} = value
      return (
        <>
          <Header />
          <Kk>
            <SliderBar />
            {isSaveVideo.length < 1 ? (
              <BgEmpty isDarkTheme={isDarkTheme}>
                <ImgEmpty
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <HeadingEmpty isDarkTheme={isDarkTheme}>
                  No saved videos found
                </HeadingEmpty>
                <ParaEmpty isDarkTheme={isDarkTheme}>
                  You can save your videos while watching them
                </ParaEmpty>
              </BgEmpty>
            ) : (
              <Bg isDarkTheme={isDarkTheme}>
                <BgCard isDarkTheme={isDarkTheme}>
                  <IconBg>
                    <Icon>
                      <HiFire />
                    </Icon>
                  </IconBg>
                  <IconHead>Saved Videos</IconHead>
                </BgCard>
                <Ul>
                  {isSaveVideo.map(eachItem => {
                    const {
                      id,
                      publishedAt,
                      thumbnailUrl,
                      title,
                      viewCount,
                      name,
                    } = eachItem
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
            )}
          </Kk>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideo
