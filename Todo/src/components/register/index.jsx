import { useState } from "react";
import { registerElements } from "../../config";
import CommonForm from "../forms/commonForm";
import CommonInput from "../inputs/commonInput";

const regInitialState = {
    name:'',
    email:'',
    password:''
}
function RegisterForm(){
    const [registerFormData, setRegisterFormData] = useState(regInitialState);
    function onHandleSubmit(event){
        event.preventDefault();
        //API logics
        console.log(registerFormData);
        setRegisterFormData(regInitialState);
    }
    return(
        <div>
            <h2>Registration</h2>
            <CommonForm
            formControls={registerElements}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            buttonText={'Register'}
            onHandleSubmit={onHandleSubmit}
            />
        </div>
    )
}
export default RegisterForm;