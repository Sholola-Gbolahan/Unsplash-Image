import React, { useContext } from "react"
import { useGlobalContext } from "./context"
import { FaMoon } from "react-icons/fa"
import { IoSunnyOutline } from "react-icons/io5"

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <IoSunnyOutline className="toggle-icon" />
        )}
      </button>
    </section>
  )
}
export default ThemeToggle
