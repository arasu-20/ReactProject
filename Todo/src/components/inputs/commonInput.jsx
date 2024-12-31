export default function CommonInput({label, onChange, type, name, id, value, placeholder}){
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input  name={name}
            id={id}
            type={type||'text'}
            placeholder={placeholder || 'Enter Your Name'}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}