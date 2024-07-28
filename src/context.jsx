import { createContext, useContext, useState } from "react"

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    // 1 storing the state valuein a variable to be used in multiple places
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    //2.  This line selects the body element of the current document using the document.querySelector() method, which returns the first element that matches the specified selector. In this case, it is selecting the body element.
    const body = document.querySelector("body")

    //3. This line toggles the dark-theme class of the body element. The classList property is a read-only list that contains the classes of an element. The toggle() method adds a class to the element if it does not have it, or removes it if it does. In this case, it adds the dark-theme class if isDarkTheme is true, and removes it if isDarkTheme is false.
    body.classList.toggle("dark-theme", newDarkTheme)

    //4. displaying to see the class toggle in console
    console.log(body)
  }

  return (
    <GlobalContext.Provider value={{ toggleDarkTheme, isDarkTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
