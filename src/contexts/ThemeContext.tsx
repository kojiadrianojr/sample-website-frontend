import React, { ReactNode, useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { dark } from '@metagg/mgg-uikit'
import { Colors as addOnColors } from '../theme/Base'

const CACHE_KEY = 'IS_DARK'
const newDark = {
  ...dark, 
  ...addOnColors,
}

const ThemeContext = React.createContext({ isDark: true, toggleTheme: () => null })

const ThemeContextProvider = ({ children }: {children: ReactNode}) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true
  })

  const toggleTheme = () => {
    setIsDark((prevState:any) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={newDark}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }