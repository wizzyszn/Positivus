import { useContext} from "react"
import { ThemeContext } from "../../context/ThemeContextAPI"
export default function Addition() {
  const {theme} = useContext(ThemeContext);
  return (
    <svg 
    width="18" height="7" viewBox="0 0 18 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6.14V0.5H17.76V6.14H0Z" fill={theme ==="light"? "#191A23" : "white"} />
    </svg>
    
  )
}
