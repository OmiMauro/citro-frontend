const Input = ({
  onChange,
  classInput,
  id,
  type,
  placeholder,
  required,
  nameField,
  value,
  minLength,
  maxLength
}) => {
  return (
    <>
      <input
        value={value}
        className={`${classInput} form-control flex-fill mr-0 mr-sm-2 mb-0 mb-sm-0 mt-2`}
        id={id}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={nameField}
        required={required}
        minlength={minLength}
        maxlength={maxLength}
      />
      <label for='id'>{placeholder}</label>
    </>
  )
}
export default Input
