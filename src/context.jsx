import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <GlobalContext.Provider value={{ toggleDarkTheme, isDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
