
const Input = ({ min, max, onChange, classInput, id, type, placeholder, required, nameField, value, minLength, maxLength }) => {
  return (
    <div className='form-row mt-2'>
      <div className='col'>
        <input
          value={value} className={`${classInput} form-control flex-fill mr-0 mr-sm-2 mb-0 mb-sm-0`}
          id={id} type={type} onChange={onChange}
          placeholder={placeholder} name={nameField} required={required}
          minlength={minLength} maxlength={maxLength}
          min={min} max={max}
        />
      </div>
    </div>
  )
}
export default Input
