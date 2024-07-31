import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [searchTerm, setSearchTerm] = useState("cat")

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    const body = document.querySelector("body")
    body.classList.toggle("dark-theme", newDarkTheme)
    console.log(body)
  }

  return (
    <GlobalContext.Provider
      value={{ toggleDarkTheme, isDarkTheme, setSearchTerm, searchTerm }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
