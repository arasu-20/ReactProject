import { useState } from "react";
import { loginElements } from "../../config";
import CommonForm from "../forms/commonForm";

const initialState = {
    email:'',
    password:''
}

function LoginForm(){
    const[loginFormData, setLoginFormData] = useState(initialState);
    function onHandleSubmit(event){
        event.preventDefault();
        // API logic
        console.log(loginFormData);
        
        setLoginFormData(initialState);
    }
    
return(
    <div>
        <h2>Login Component</h2>
        <CommonForm formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginElements}
        buttonText={'Login'}
        onHandleSubmit={onHandleSubmit} />
    </div>
)
}
export default LoginForm;