import { createContext, useContext, useEffect, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  //A function to check if the system is set to dark Mode by default
  const getInitialDarkMode = () => {
    const preferDarkMode = window.matchMedia(
      "( prefers-color-scheme:dark)"
    ).matches
    console.log(preferDarkMode)

    return preferDarkMode
  }
  // setting the return value to State
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode)
  const [searchTerm, setSearchTerm] = useState("cat")

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme)
  }, [isDarkTheme])
  return (
    <GlobalContext.Provider
      value={{ toggleDarkTheme, isDarkTheme, setSearchTerm, searchTerm }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
