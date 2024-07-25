import React, { createContext, useState} from 'react'
export const NavBarContext = createContext()
export default function NavbarContextAPI({children}) {
const [toggle,setToggle] = useState(false);
  return (
   <NavBarContext.Provider value={{toggle,setToggle}}>
    {children}
   </NavBarContext.Provider>
  )
}

