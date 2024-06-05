import React, { createContext, useEffect, useState} from 'react'
const getThemefromLocalStorage = () =>{
  let value = localStorage.getItem("theme");
  return  value || "light"
}
export const ThemeContext = createContext()
export default function ThemeContextAPI({children}) {
  const [theme, setTheme] = useState(() =>{
    return getThemefromLocalStorage()
  })
  useEffect(()=>{
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggle = () =>{
    setTheme(theme === 'light' ? "dark" : 'light');
    //localStorage.setItem("theme", theme)

    return localStorage.removeItem("theme")
  }
  return (
   <ThemeContext.Provider value={{theme, toggle}}>
    {children}
   </ThemeContext.Provider>
  )
}

