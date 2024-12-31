import { useState } from "react";

export default function FormComponent(){
    const[nameValue, setNameValue] = useState('');
    const[emailValue, SetEmailValue] = useState('');
    const[formData, setFormData] = useState({name:'',
        email:''
    });
    function handleChangeName(event){
        const {value} = event.target;
        setNameValue(value);
    }
    function handleChangeEmail(event){
        const {value} = event.target;
        SetEmailValue(value);
    }
    function handleBoth(event){
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log("Name:",formData.name,"/","Email:",formData.email);
    }
    return(
    <><h2>Form</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label>
    <input onChange={handleBoth} value={formData.name} name="name" type="text" id="name" placeholder="Enter Your Name" /><br />
    <label htmlFor="">Email:</label>
    <input type="email" name="email" id="email" placeholder="Enter Your Email" onChange={handleBoth} value={formData.email}/><br />
    <button type="submit">Submit</button>
    </form>
    </>
    );
}