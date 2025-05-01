import React from 'react'

const ThemeContext = React.createContext({
  isSaveVideo: [],
  isDarkTheme: false,
  themeChange: () => {},
  addSaveVideo: () => {},
})

export default ThemeContext
