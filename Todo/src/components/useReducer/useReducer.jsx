import { useReducer } from "react";

const initialState = {
    showText : false,
    changeStyle: false
}
const HIDE_TEXT = 'HIDE_TEXT';
const SHOW_TEXT = 'SHOW_TEXT';
const TOGGLE = 'TOGGLE';
function reducer(state, action){
    switch(action.type){
        case SHOW_TEXT:
            return {
                ...state,
                showText: true
            }
        case HIDE_TEXT:
            return {
                ...state,
                showText: false
            }
        case TOGGLE:
            return {
                ...state,
                changeStyle: !state.changeStyle
                
            }
        default:
            return state;
    }
}
export default function UseReducerExample(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<div>
        {
            state.showText ? <h3 style={{backgroundColor: state.changeStyle ? 'black' : 'blue', color: state.changeStyle ? 'yellow' : "black", fontSize: state.changeStyle ? '100px' : '50px'}}>Hello World!</h3> : null
        }
        <button onClick={()=>dispatch({type: HIDE_TEXT})}>Hide Text</button>
        <button onClick={()=>dispatch({type: SHOW_TEXT})}>Show Text</button>
        <button onClick={()=>dispatch({type: TOGGLE})}>Change Text</button>
    </div>);
}