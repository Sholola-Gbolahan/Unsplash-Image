import React, { useContext } from "react"
import { useGlobalContext } from "./context"
import { FaMoon } from "react-icons/fa"
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()

  return <button onClick={toggleDarkTheme}>{isDarkTheme ? <FaMoon/> : <IoSunnyOutline/>} </button>
}
export default ThemeToggle
