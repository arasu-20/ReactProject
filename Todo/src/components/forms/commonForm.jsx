import CommonInput from "../inputs/commonInput";
import PropTypes from 'prop-types';

const formType = {
    INPUT:'input',
    SELECT:'select',
    TEXTAREA:'textarea'
}

function CommonForm({formControls= [], formData, setFormData, buttonText, onHandleSubmit}){
    function renderFormElement(getCurrentElement){
        let content = null;
        switch(getCurrentElement.componentType){
            case formType.INPUT:
                content =  (<CommonInput
                label={getCurrentElement.label}
                name={getCurrentElement.name}
                id={getCurrentElement.id}
                type={getCurrentElement.type}
                placeholder={getCurrentElement.placeholder}
                value={formData[getCurrentElement.name]}
                onChange={(event)=>{
                    setFormData({
                        ...formData,
                        [event.target.name]: event.target.value,
                    })
                }
            }
                />)
                break;

        }
        return content;
    }

    return(
        <form onSubmit={onHandleSubmit}>
            {
                formControls.length ?
                formControls.map((getCurrentElement)=>renderFormElement(getCurrentElement))
                : null
            }
            <div style={{marginTop: '10px'}}>
                <button type="submit">{buttonText ||"Submit"}</button>
            </div>
        </form>
    )
}
export default CommonForm;