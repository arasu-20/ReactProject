import { useContext } from "react"
import { GlobalContext } from "../.."

function ContextButton(){
    const {setTheme, theme} = useContext(GlobalContext);
    return <button onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}>
        Change Theme
    </button>
}

export default ContextButton