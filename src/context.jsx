import { createContext, useContext, useEffect, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

//A function to check if the system is set to dark Mode by default
const getInitialDarkMode = () => {
  const preferDarkMode = window.matchMedia(
    "( prefers-color-scheme:dark)"
  ).matches
  //checking if initial value in localStorage is set to dark Mode
  const storedDarkMode = localStorage.getItem("darkTheme") === "true"

  return storedDarkMode || preferDarkMode
}

const AppContext = ({ children }) => {
  // setting the return value to State
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode)
  const [searchTerm, setSearchTerm] = useState("cat")

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    //Storing the value of selected theme to local storage
    localStorage.setItem("darkTheme", newDarkTheme)
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
