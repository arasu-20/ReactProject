import { useContext } from "react";
import { GlobalContext } from "../..";

function ContextText(){
    const {theme} = useContext(GlobalContext)
    return <h1 style={{fontSize: theme === 'light' ? '100px' : '50px' , backgroundColor : theme === 'light'? 'blue' : 'black' , color: theme === 'light'? 'black' : 'yellow'}}>Arasu</h1>
}

export default ContextText;