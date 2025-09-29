const FormInput = ({
	type,
	name,
	label,
	placeholder,
	value,
  icon,
	onChange,
	onBlur,
	error,
}) => {
  return (
      <div className="grid"> 
        <label
        className="mb-1 mt-7"
        htmlFor={name}>
        {icon && <i className={`${icon} text-gray-100 mr-2`}></i>}
        {label}
        </label>
        <div>
          <input
          type={type}
          name={name}           
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`rounded-sm bg-gray-100 text-gray-500 pl-4 font-light text-[15px] py-2 w-full 
            focus:ring-3 focus:ring-gray-700 focus:border-gray-700 outline-none 
            ${error ? "bg-red-100 border-red-700 border-2" : "bg-gray-100"}`}
          />
        </div>
        {error && <p className="text-red-400 text-sm mt-2 -mb-7 fade-in text-right ">{error}</p>}
      </div>
  );
};

export default FormInput